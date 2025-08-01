![cover](./Netrum.png)

### What is Netrum Lite Node CLI?
- Netrum Lite Node CLI is a lightweight command-line tool that allows anyone to participate in the Netrum decentralized compute network.

- It securely creates a wallet, connects to the Netrum server, registers the node on-chain, syncs uptime data, mines NPT tokens, and allows daily token claiming — all from your terminal.

- Ideal for VPS and low-resource devices, this node is designed for fast setup, full transparency, and passive token rewards.

Official [Netrum Labs Github Resource](https://github.com/NetrumLabs/netrum-lite-node)

> #### You can run this node for fun, yes incentivized but has some red flags so only spend what you are willing to lose. Goodluck ✌️
---
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
---
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
---
### Netrum Lite Node – Setup Guide
- Follow the steps below to install and run the Netrum Lite Node CLI on Ubuntu/Linux:

  #### Clone the Repository
  ```
  git clone https://github.com/NetrumLabs/netrum-lite-node.git
  ```
  #### Navigate to Project Directory
  ```
  cd netrum-lite-node && screen -S netrum
  ```
  You can detach the screen by pressing `Ctrl A + D` at any time and reattach using `screen -r netrum`
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
  After creating your wallet, fund it with $2 worth of `Base_ETH` and at least 0.001 `$Base_ETH Sepolia`.
  Import this wallet into your Metamask or Rabby Wallets, whichever you prefer.
  > Then visit [Base Names](https://www.base.org/names)
  	- Connect the wallet you created in previous command.
  	- Get a Base username. If the site doesn't show the name is available or it doesn't look like it is working, use a `VPN`, that's what worked for me.
  > Join Discord [Netrum Labs](https://discord.gg/uxDUgG9kW8)
  
  > Visit [Netrum Wait-list](https://netrumlabs.com/Waitlist?ref=0xc2d8a67d378c89C59E1EF857d93705390f4A6C07)
  	- Connect the same wallet you got the Base username on which is also your CLI Wallet.
  	- Complete the available tasks there to claim the `waitlist` role.
  > Complete [Netrum Zealy Tasks](https://zealy.io/cw/netrumai/invite/T_B0D6fs3tTrmKzebOzIz?questId=38b7313c-62a6-44df-80c9-8f92a807e690)
	- There is an ongoing campaign, 5000 XP to first 100, as at time of this commit update, might have been concluded, confirm.
  #### Export the wallet keys
  If you are using a `VPS`, use this to copy the `key.txt` file to your Local machine `Downloads` folder. Paste the command in your `Command Prompt` and enter.
  ```
  scp root@<VPS_IP>:/root/netrum-lite-node/data/wallet/key.txt C:\Users\agoma\Downloads\
  ```
  Replace `<VPS_IP>` with your VPS IP, save the fingerprint and input your `VPS` password when prompted. It would then save to the folder.
  
  If you are using `WSL`, use this to copy the `key.txt` file to your Local machine `Downloads` folder Paste this command while still in `WSL` then enter.
  ```
  sudo cp /root/netrum-lite-node/data/wallet/key.txt /mnt/c/Users/xxx/Downloads/
  ```
  where `xxx` is your Local PC Username where you store your files.
  #### Check Basename conflicts
  ```
  netrum-check-basename
  ```
  #### Generate a Node ID
  ```
  netrum-node-id
  ```
  #### Sign a message with node key
  ```
  netrum-node-sign
  ```
  #### Register node on-chain
  ```
  netrum-node-register
  ```
  When you complete this step correctly, your `node-id` will be outputted.
  #### Sync blockchain data
  ```
  netrum-sync
  ```
  #### Start mining
  ```
  netrum-mining
  ```
  After you run the `start` command, give it a few minutes to sign the transaction, then you will receive a successful transaction response saying this `✅ TX submitted: https://basescan.org/tx/0x...0000000`
  #### Node mining logs
  ```
  netrum-mining-log
  ```
  `Ctrl A + D` to detach from screen.
  #### NPT Claim
  ```
  netrum-claim
  ```
  `NB`: You can only use the `netrum-claim` command after your node has mined `NPT` every 24 hours.
---
### How to Get `LitenodeHunter` Role
- Go to the `⁠🤖┃bot-commands` channel in the Discord community.
- Type in `/register` it would drop down and show you the command for the `Netrum Node`, click once when you see it.
- Paste your `node-id` in the dialog box that shows and hit enter to bind your node to your Discord account.
  
`NB`: Your `node-id` looks like this `netrum.lite.deeanalyst.base.eth`

#### `NB`: Make sure you are in the netrum directory before running any `netrum` commands.
```
cd netrum-lite-node # use this to enter the netrum directory
```
---
### Troubleshooting
- If you get the below error while trying to monitor the logs using `netrum-mining-log` follow these instructions.
  
  <img width="644" height="55" alt="Screenshot 2025-07-27 232603" src="https://github.com/user-attachments/assets/b0f18d80-898f-4a8b-9a9d-4b5a85e1e9f6" />

  Do this 👇
  ```
  chmod +x /usr/bin/netrum-mining-log
  ```
  then re-run the `Node mining logs` command again.
---
### Update your node
Run this to update your miner
```
	git stash
	git pull
```
Give permission to the CLI v2 files then rerun the start command and logs command after that.
```
	sudo npm link --force
```

`NB`: If you ever run into a permission denied error, use this command below
```
chmod +x /usr/bin/
```
For example: 
> `root@vmi2689380:~# netrum-mining-log`  
> `root@vmi2689380:~# /usr/bin/ Error - Permission denied`

Per the command that brings this error, just do this with the `chmod` command, so for like my example...
```
chmod +x /usr/bin/netrum-mining-log && netrum-mining-log
```
if it was the same error for `netrum-sync`
```
chmod +x /usr/bin/netrum-sync && netrum-sync
```

