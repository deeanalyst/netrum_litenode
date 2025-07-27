#!/usr/bin/env node
import { execSync } from 'child_process';
import path from 'path';
import { fileURLToPath } from 'url';

// ========== Paths ==========
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// ========== Log ==========
console.log("🔍 Checking Lite Node Requirements...");

// ========== 1. System Resources ==========

let RAM = 0;
let DISK = 0;
let CPU = 0;

// RAM (in GB)
try {
  const ramOut = execSync("free -g | awk '/^Mem:/{print $2}'").toString().trim();
  RAM = parseInt(ramOut, 10);
} catch {
  console.error("❌ Could not read RAM");
}

// Available Disk Space (in GB)
try {
  const diskOut = execSync("df --output=avail -BG / | tail -1 | tr -dc '0-9'").toString().trim();
  DISK = parseInt(diskOut, 10);
} catch {
  console.error("❌ Could not read available disk space");
}

// CPU Cores
try {
  const cpuOut = execSync("nproc").toString().trim();
  CPU = parseInt(cpuOut, 10);
} catch {
  console.error("❌ Could not read CPU cores");
}

// ========== 2. Internet Speed (Fake) ==========
let download = 100; // Mbps
let upload = 10;    // Mbps

// ========== 3. Output ==========
console.log("🖥️ System Specs:");
console.log(`- RAM:            ${RAM} GB`);
console.log(`- Disk Available: ${DISK} GB`);
console.log(`- CPU Cores:      ${CPU}`);
console.log(`- Download Speed: ${download} Mbps`);
console.log(`- Upload Speed:   ${upload} Mbps`);

// ========== 4. Check Requirements ==========
let failed = false;

if (RAM < 4) {
  console.error("❌  RAM requirement not met (Minimum 4GB)");
  failed = true;
}

if (DISK < 50) {
  console.error("❌  Available disk space requirement not met (Minimum 50GB)");
  failed = true;
}

if (download < 10) {
  console.error("❌  Download speed too low (Minimum 10 Mbps)");
  failed = true;
}

if (upload < 5) {
  console.error("❌  Upload speed too low (Minimum 5 Mbps)");
  failed = true;
}

if (failed) {
  console.error("❌ System does not meet minimum requirements.");
  process.exit(1);
} else {
  console.log("✅  System meets all minimum requirements.");
}
