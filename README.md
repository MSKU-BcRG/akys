Languages
=============================
- [ENG](#a-decentralized-resource-management-system-proposal-for-disasters-ngo-rmsd)
- [TR](#sivil-toplum-kuruluşları-afet-kaynak-yönetim-sistemi-stk-akys)

----------------------------------

# A Decentralized Resource Management System Proposal For Disasters: NGO-RMSD
The proposed system aims to enable the 
non-governmental organizations (NGO) and public institutions to
manage and coordinate the resources in a trusted environment
in the case of disasters.
The system aims to reach more disaster victims in a more timely
manner.

<img src="https://github.com/MSKU-BcRG/akys/blob/master/project-images/NGO-RMSD-simple-design.png" width="600" alt="NGO-RMSD Simple Design">

Details of the system is written as a publication. The link will be provided when published.

## Fig 1. NGO-RMSD System Architecture
<img src="https://github.com/MSKU-BcRG/akys/blob/master/project-images/NGO-RMSD-architecture.jpeg" width="600" alt="NGO-RMSD System Architecture">

## Installation Notes:
The project is still under development.

### Requirements
- **NodeJS v12.16.1 >**

- **Truffle v5.1.39 >**

    Installing truffle:

    > `npm install -g truffle`

- **Ganache CLI v6.10.1 >**

    Installing ganache:

    > `npm install -g ganache-cli`


### Getting Start

Generate the accounts from ganache-cli on command-line

```
../akys > ganache-cli
```

In a new command-line, migrate the contract for the development network

```
../akys > truffle migrate --network development
```

And use truffle console to call functions inside the development network

```
../akys > truffle console
truffle(development)>
```

### Testing
Local test without blockchain network
```
../akys > truffle test
```

----------------------------------

# Sivil Toplum Kuruluşları Afet Kaynak Yönetim Sistemi: STK-AKYS
Önerilen sistemde sivil toplum kuruluşlarının (STK) ve kamu kurumlarının afet durumunlarında güvenilir bir ortamdaki kaynakları yönetmesini ve koordine etmesini amaçlamaktadır. Sistem daha çok zamanda daha çok felaketzedeye ulaşmayı hedefliyor.

<img src="https://github.com/MSKU-BcRG/akys/blob/master/project-images/STK-AKYS-simple-design.png" width="600" alt="STK-AKYS Basit Dizayn">

Sistemin detayları yayın olarak yazılmıştır. Bağlantı yayınlandığında paylaşılacaktır.

## Fig 1. STK-AKYS Sistem Mimarisi
<img src="https://github.com/MSKU-BcRG/akys/blob/master/project-images/STK-AKYS-architecture.jpeg" width="600" alt="NGO-RMSD Sistem Mimarisi">

## Kurulum Notları:
Proje halen geliştirme aşamasındadır.

### Gereksinimler
- **NodeJS v12.16.1 >**

- **Truffle v5.1.39 >**

    Truffle indirme:

    > `npm install -g truffle`

- **Ganache CLI v6.10.1 >**

    Ganache indirme:

    > `npm install -g ganache-cli`


### Başlarken

Hesapları komut satırında ganache-cli'den oluşturuyoruz

```
../akys > ganache-cli
```

Yeni bir komut satırında, kontratı geliştirme ağına taşıyoruz

```
../akys > truffle migrate --network development
```

Ve geliştirme ağı içindeki fonksiyonları çağırmak için truffle konsolunu kullanıyoruz

```
../akys > truffle console
truffle(development)>
```

### Test

Blokzinciri ağı olmadan yerel test
```
../akys > truffle test
```
