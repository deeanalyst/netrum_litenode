### What is Netrum Lite Node CLI?
- Netrum Lite Node CLI is a lightweight command-line tool that allows anyone to participate in the Netrum decentralized compute network.

- It securely creates a wallet, connects to the Netrum server, registers the node on-chain, syncs uptime data, mines NPT tokens, and allows daily token claiming — all from your terminal.

- Ideal for VPS and low-resource devices, this node is designed for fast setup, full transparency, and passive token rewards.

### Hardware & Network Requirements
To run the Netrum Lite Node smoothly, make sure your system meets the following minimum requirements:

### Hardware Requirements

| Component | Minimum | Recommended |
|----------|----------|----------|
| CPU | 2 Cores | 2+ Cores |
| RAM | 4 GB | 6 GB or more |
| Disk Space | 50 GB SSD | 100 GB SSD |

> SSD storage is highly recommended for faster performance and node stability.

### Network Requirements

| Type | Minimum Speed |
|----------|----------|
| Download    | 10 Mbps     |
| Upload    | 10 Mbps     |	
	
> A stable and fast internet connection is important for uptime sync, mining tasks, and daily reward claims.

### Install Required Dependencies
```
sudo apt-get update && sudo apt-get upgrade -y
sudo apt install curl ufw iptables build-essential git wget lz4 jq make gcc nano automake autoconf tmux htop nvme-cli libgbm1 pkg-config libssl-dev libleveldb-dev tar clang bsdmainutils ncdu unzip libleveldb-dev  -y

# Install NodeJS
sudo apt update
curl -fsSL https://deb.nodesource.com/setup_22.x | bash -
sudo apt install -y nodejs
node -v
npm install -g yarn
yarn -v
npm install -g npm@11.5.1
npm -v
corepack enable
```
### Netrum Lite Node – Setup Guide
- Follow the steps below to install and run the Netrum Lite Node CLI on Ubuntu/Linux:

  #### Clone the Repository
  ```
  git clone https://github.com/NetrumLabs/netrum-lite-node.git
  ```
  #### Navigate to Project Directory
  ```
  cd netrum-lite-node
  ```
  #### Install Netrum Dependencies
  ```
  npm install
  ```
  #### Link the CLI Globally
  ```
  npm link
  ```
  #### Test the `netrum` CLI (also outputs command list)
  ```
  netrum
  ```
  
  <details>
  <summary>👉 Click me to see the CLI Interface 👈</summary>
  <img src="https://github.com/deeanalyst/neutrum_litenode/raw/main/Netrum%20CLI%20Interface.png" alt="Netrum CLI Interface" width="300" height="300"/>
  </details>

  #### Copy my `requirements.js` for a smooth system requirements check
  ```
  curl -o /root/netrum-lite-node/src/system/system/requirements.js https://raw.githubusercontent.com/deeanalyst/netrum_litenode/main/requirements.js
  ```
  #### System Requirements Check
  ```
  netrum-system
  ```
  #### Create Wallet
  ```
  netrum-new-wallet
  ```
  #### Export the wallet keys
  `If you are using a `VPS`, copy to your Local machine `Downloads` folder`
  ```
  scp root@<VPS_IP>:/root/netrum-lite-node/data/wallet/key.txt C:\Users\agoma\Downloads\
  ```
  `Replace `<VPS_IP>` with your VPS IP, save the fingerprint and input your `VPS` password when prompted. It would then save to the folder.`
  `If you are using `WSL`, copy to your Local machine `Downloads` folder`
  ```
  sudo cp /root/netrum-lite-node/data/wallet/key.txt /mnt/c/Users/agoma/Downloads/
  ```
  
