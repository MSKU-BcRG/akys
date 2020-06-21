pragma solidity >=0.4.22 <0.6.0;
pragma experimental ABIEncoderV2;

contract akys{
    struct NeedOffer{
        string needID;
        string personalDataHash;
        string needType;
        uint256 amount;
    }
    
    struct SupportOffer{
        string supportID;
        string personalDataHash;
        string supportType;
        uint256 supportAmount;
        string sendType;
    }
    
    // Total Count of Offers
    uint256 TotalCountSupportOffers;
    uint256 TotalCountNeedOffers;
    
    // Added Support Offers
    SupportOffer[] SupportOfferList;
    
    // Approved Support Offers
    SupportOffer[] ApprovedSupportOfferList;
    
    // Canceled Support Offers
    SupportOffer[] CanceledSupportOfferList;
    
    // Added All Need Offers  
    NeedOffer[] NeedOfferList;
       
    // Approved Need Offers Count
    NeedOffer[] ApprovedNeedOfferList;
    
    // Canceled Need Offers Count
    NeedOffer[] CanceledNeedOfferList;
    
    // User Auth
    mapping(address => string) UserAuth;
    
    // Status of Offers
    // supportID -> Status
    mapping(string=>string) SupportOfferStatus;
    // needID -> Status
    mapping(string=>string) NeedOfferStatus;
    
    modifier checkAuth(string memory _role){
        require(keccak256(abi.encode(UserAuth[msg.sender])) == keccak256(abi.encode(_role)));
        _;
    }
    
    constructor() public{
        UserAuth[msg.sender] = "ADMIN";
    }
    
    // Set User Role to a User Address
    function setUser(address _userAddress, string memory _role) public checkAuth("ADMIN") {
        
        UserAuth[_userAddress] = _role;
        
    }
     
    // Get User's Role 
    function getUserAuth(address _userAddress) public view checkAuth("ADMIN") returns ( string memory){
        
        return UserAuth[_userAddress];
        
    }
    
    // Create a new Support
    function createSupport(
        string memory _supportID,
        string memory _personalDataHash, 
        string memory _supportType, 
        uint256 _supportAmount, 
        string memory _sendType)public checkAuth("CREATER") {
        SupportOffer memory newSupportOffer = SupportOffer({
            supportID : _supportID,
            supportType : _supportType,
            personalDataHash : _personalDataHash,
            supportAmount : _supportAmount,
            sendType : _sendType
        });
        
        SupportOfferList.push(newSupportOffer);
        SupportOfferStatus[_supportID] = "WAITING";
    }
    
    // Create a new Need
    function createNeed(
        string memory _personalDataHash, 
        string memory _needID,
        string memory _needtype, 
        uint256 _amount
         )public checkAuth("CREATER") {
        NeedOffer memory newNeedOffer =  NeedOffer({
            personalDataHash : _personalDataHash,
            needID : _needID,
            needType : _needtype,
            amount : _amount
        });
       
        NeedOfferList.push(newNeedOffer);
        NeedOfferStatus[_needID] = "WAITING";
    }

    function approveNeed(string memory _needID) public checkAuth("CHECKER") {
        NeedOfferStatus[_needID] = "APPROVED";
    }
    
    function approveSupport(uint256 _indexSupportOffer) public  checkAuth("CHECKER"){
        ApprovedSupportOfferList.push(SupportOfferList[_indexSupportOffer]);
    }
    
    function showSupport(uint256 _indexSupportOffer)public view returns(SupportOffer memory){
        return SupportOfferList[_indexSupportOffer];
    }
    
    function showSupports()public view returns(SupportOffer[] memory){
        return SupportOfferList;
    }
    
    function showAllApprovedSupports()public view returns(SupportOffer[] memory){
        return ApprovedSupportOfferList;
    }
    
    function showNeed(uint256 _needID)public view returns(NeedOffer memory need){
        return NeedOfferList[_needID];
    }
    function showApprovedNeed(uint256 _needID)private view returns(NeedOffer memory need){
        return ApprovedNeedOfferList[_needID];
    }
    function showNeedOffers()public view returns(NeedOffer[] memory){
        return NeedOfferList;
    }
    function showNeedStatus(string memory _needID) public view checkAuth("CHECKER") returns (string memory) {
        return NeedOfferStatus[_needID];
    }
    
    function showSupportStatus(string memory _supportID) public view checkAuth("CHECKER") returns (string memory) {
        return SupportOfferStatus[_supportID];
    }
    
}
