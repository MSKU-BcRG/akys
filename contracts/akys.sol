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

    // Added All Need Offers  
    NeedOffer[] NeedOfferList;
    
    // Approved Support Offers
    SupportOffer[] ApprovedSupportOfferList;

    // Approved Need Offers Count
    NeedOffer[] ApprovedNeedOfferList;
    
    // Canceled Support Offers
    SupportOffer[] CanceledSupportOfferList;
    
    // Canceled Need Offers Count
    NeedOffer[] CanceledNeedOfferList;
    
    // User Auth
    mapping(address => string) UserAuth;
    
    // Need & Support Maps
    // supportID -> SupportOffer
    mapping(string => SupportOffer) SupportOfferMap;
    // needID -> NeedOffer
    mapping(string => NeedOffer) NeedOfferMap;

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
    function setUser(address _userAddress, string memory _role) public checkAuth("ADMIN"){
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
        string memory _sendType)public checkAuth("CREATER"){
        SupportOffer memory newSupportOffer = SupportOffer({
            supportID : _supportID,
            supportType : _supportType,
            personalDataHash : _personalDataHash,
            supportAmount : _supportAmount,
            sendType : _sendType
        });

        if(SupportOfferList.length == 0){
            SupportOfferList.push(newSupportOffer);
        }else{
            uint256 num = 1000000000;
            for (uint256 i=0;i<SupportOfferList.length;i++){
                if(keccak256(abi.encodePacked(SupportOfferList[i].supportID)) == keccak256(abi.encodePacked(""))){
                    num = i;
                    break;
                }
            }
            if (num != 1000000000){
                SupportOfferList[num] = newSupportOffer;
            }else{
                SupportOfferList.push(newSupportOffer);
            }
        }        

        SupportOfferMap[_supportID] = newSupportOffer;
        SupportOfferStatus[_supportID] = "WAITING";

    }
    
    // Create a new Need
    function createNeed(
        string memory _needID,
        string memory _personalDataHash, 
        string memory _needtype, 
        uint256 _amount
         )public checkAuth("CREATER"){
        NeedOffer memory newNeedOffer =  NeedOffer({
            personalDataHash : _personalDataHash,
            needID : _needID,
            needType : _needtype,
            amount : _amount
        });

        if(NeedOfferList.length == 0){
            NeedOfferList.push(newNeedOffer);
        }else{
            uint256 num = 1000000000;
            for (uint256 i=0;i<NeedOfferList.length;i++){
                if(keccak256(abi.encodePacked(NeedOfferList[i].needID)) == keccak256(abi.encodePacked(""))){
                    num = i;
                    break;
                }
            }
            if (num != 1000000000){
                NeedOfferList[num] = newNeedOffer;
            }else{
                NeedOfferList.push(newNeedOffer);
            }
        }

        NeedOfferMap[_needID] = newNeedOffer;
        NeedOfferStatus[_needID] = "WAITING";

    }

    function showSupport(string memory _supportID)public view returns(SupportOffer memory){
        return SupportOfferMap[_supportID];
    }

    function showNeed(string memory _needID)public view returns(NeedOffer memory){
        return NeedOfferMap[_needID];
    }

    function approveSupport(string memory _supportID) public  checkAuth("CHECKER"){
        SupportOfferStatus[_supportID] = "APPROVED";
        if(ApprovedSupportOfferList.length == 0){
            ApprovedSupportOfferList.push(SupportOfferMap[_supportID]);
            for (uint256 j = 0; j<SupportOfferList.length; j++){
                if(keccak256(abi.encodePacked(SupportOfferList[j].supportID)) == keccak256(abi.encodePacked(SupportOfferMap[_supportID].supportID))){
                    delete SupportOfferList[j];
                    break;
                }
            }
        }else{
            bool check = false;
            for (uint256 i=0;i<ApprovedSupportOfferList.length;i++){
                if(keccak256(abi.encodePacked(ApprovedSupportOfferList[i].supportID)) == keccak256(abi.encodePacked(""))){
                    for (uint256 j = 0; j<SupportOfferList.length; j++){
                        if(keccak256(abi.encodePacked(SupportOfferList[j].supportID)) == keccak256(abi.encodePacked(SupportOfferMap[_supportID].supportID))){
                            ApprovedSupportOfferList[i] = SupportOfferList[j];
                            delete SupportOfferList[j];
                            check = true;
                            break;
                        }
                    }
                }
            } 
            if (!check){
                ApprovedSupportOfferList.push(SupportOfferMap[_supportID]);
                for (uint256 j = 0; j<SupportOfferList.length; j++){
                    if(keccak256(abi.encodePacked(SupportOfferList[j].supportID)) == keccak256(abi.encodePacked(SupportOfferMap[_supportID].supportID))){
                        delete SupportOfferList[j];
                        break;
                    }
                }
            }
        }
    }

    function approveNeed(string memory _needID) public  checkAuth("CHECKER"){
        NeedOfferStatus[_needID] = "APPROVED";
        if(ApprovedNeedOfferList.length == 0){
            ApprovedNeedOfferList.push(NeedOfferMap[_needID]);
            for (uint256 j = 0; j<NeedOfferList.length; j++){
                if(keccak256(abi.encodePacked(NeedOfferList[j].needID)) == keccak256(abi.encodePacked(NeedOfferMap[_needID].needID))){
                    delete NeedOfferList[j];
                    break;
                }
            }
        }else{
            bool check = false;
            for (uint256 i=0;i<ApprovedNeedOfferList.length;i++){
                if(keccak256(abi.encodePacked(ApprovedNeedOfferList[i].needID)) == keccak256(abi.encodePacked(""))){
                    for (uint256 j = 0; j<NeedOfferList.length; j++){
                        if(keccak256(abi.encodePacked(NeedOfferList[j].needID)) == keccak256(abi.encodePacked(NeedOfferMap[_needID].needID))){
                            ApprovedNeedOfferList[i] = NeedOfferList[j];
                            delete NeedOfferList[j];
                            check = true;
                            break;
                        }
                    }
                }
            } 
            if (!check){
                ApprovedNeedOfferList.push(NeedOfferMap[_needID]);
                for (uint256 j = 0; j<NeedOfferList.length; j++){
                    if(keccak256(abi.encodePacked(NeedOfferList[j].needID)) == keccak256(abi.encodePacked(NeedOfferMap[_needID].needID))){
                        delete NeedOfferList[j];
                        break;
                    }
                }
            }
        }
    }

    function cancelSupport(string memory _supportID) public  checkAuth("CHECKER"){
        CanceledSupportOfferList.push(SupportOfferMap[_supportID]);
        if (keccak256(abi.encodePacked(SupportOfferStatus[_supportID])) == keccak256(abi.encodePacked("WAITING"))){
            for (uint128 i = 0; i<SupportOfferList.length; i++){
                if(keccak256(abi.encode(SupportOfferList[i].supportID)) == keccak256(abi.encode(SupportOfferMap[_supportID].supportID))){
                    delete SupportOfferList[i];
                    break;
                }
            }
        }else if(keccak256(abi.encodePacked(SupportOfferStatus[_supportID])) == keccak256(abi.encodePacked("APPROVED"))){
            for (uint128 i = 0; i<ApprovedSupportOfferList.length; i++){
                if(keccak256(abi.encode(ApprovedSupportOfferList[i].supportID)) == keccak256(abi.encode(SupportOfferMap[_supportID].supportID))){
                    delete ApprovedSupportOfferList[i];
                    break;
                }
            }
        }
        delete SupportOfferMap[_supportID];
    }

    function cancelNeed(string memory _needID) public  checkAuth("CHECKER"){
        CanceledNeedOfferList.push(NeedOfferMap[_needID]);
        if (keccak256(abi.encodePacked(NeedOfferStatus[_needID])) == keccak256(abi.encodePacked("WAITING"))){
            for (uint128 i = 0; i<NeedOfferList.length; i++){
                if(keccak256(abi.encode(NeedOfferList[i].needID)) == keccak256(abi.encode(NeedOfferMap[_needID].needID))){
                    delete NeedOfferList[i];
                    break;
                }
            }
        }else if(keccak256(abi.encodePacked(NeedOfferStatus[_needID])) == keccak256(abi.encodePacked("APPROVED"))){
            for (uint128 i = 0; i<ApprovedNeedOfferList.length; i++){
                if(keccak256(abi.encode(ApprovedNeedOfferList[i].needID)) == keccak256(abi.encode(NeedOfferMap[_needID].needID))){
                    delete ApprovedNeedOfferList[i];
                    break;
                }
            }
        }
        delete NeedOfferMap[_needID];
    }

    function showSupports()public view returns(SupportOffer[] memory){
        return SupportOfferList;
    }

    function showNeeds()public view returns(NeedOffer[] memory){
        return NeedOfferList;
    }

    function showAllApprovedSupports()public view returns(SupportOffer[] memory){
        return ApprovedSupportOfferList;
    }

    function showAllApprovedNeeds()public view returns(NeedOffer[] memory){
        return ApprovedNeedOfferList;
    }
   
    function showSupportStatus(string memory _supportID) public view checkAuth("CHECKER") returns (string memory) {
        return SupportOfferStatus[_supportID];
    }
    
    function showNeedStatus(string memory _needID) public view checkAuth("CHECKER") returns (string memory) {
        return NeedOfferStatus[_needID];
    }

    function showCanceledSupports() public view returns(SupportOffer[] memory) {
        return CanceledSupportOfferList;
    }

    function showCanceledNeeds() public view returns(NeedOffer[] memory) {
        return CanceledNeedOfferList;
    }

    function showTotalSupportCount() public view returns(uint256 count) {
        return SupportOfferList.length;
    }

    function showTotalNeedCount() public view returns(uint256 count) {
        return NeedOfferList.length;
    }
}