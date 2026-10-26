(function () {
  "use strict";

  const products = {
    "dell-poweredge-t150": ["Dell PowerEdge T150", "SERVER · TOWER", "assets/img/products/dell.jpeg", "KES 185,000", "Xeon E-2334, 16GB ECC RAM, and 1TB storage. A practical entry server for files, users, and small business applications.", ["Intel Xeon E-2334 processor", "16GB ECC memory", "1TB business storage", "Tower chassis for small offices"]],
    "hpe-proliant-ml110-gen11": ["HPE ProLiant ML110 Gen11", "SERVER · TOWER", "assets/img/products/hp.jpeg", "KES 452,000", "Xeon E-2436, 32GB ECC RAM, and 2TB RAID storage for growing offices and virtualisation-ready workloads.", ["Intel Xeon E-2436 processor", "32GB ECC memory", "2TB RAID storage", "Virtualisation-ready platform"]],
    "dell-poweredge-r450": ["Dell PowerEdge R450", "SERVER · RACK", "assets/img/products/dell2.jpeg", "KES 457,000", "A compact rack server with enterprise storage and memory options for heavier workloads and central services.", ["Intel Xeon Silver processor", "32GB ECC memory", "Enterprise RAID storage", "1U rack form factor"]],
    "lenovo-thinkpad-e14-gen-7": ["Lenovo ThinkPad E14 Gen 7", "LAPTOP · BUSINESS", "assets/img/products/lenovo.jpeg", "KES 115,000", "A durable everyday business laptop with Core Ultra 5, 16GB RAM, 512GB SSD, and a 14-inch display.", ["Core Ultra 5 processor", "16GB RAM", "512GB SSD", "14-inch business display"]],
    "hp-elitebook-840-g11": ["HP EliteBook 840 G11", "LAPTOP · BUSINESS", "assets/img/products/hp2.jpeg", "KES 105,000", "Secure, portable professional computing with Core Ultra 5, 16GB RAM, 512GB SSD, and a 14-inch display.", ["Core Ultra 5 processor", "16GB RAM", "512GB SSD", "14-inch business display"]],
    "fortinet-fortigate-60f": ["Fortinet FortiGate 60F", "NETWORK SECURITY", "assets/img/products/f.jpg", "KES 95,000", "Next-generation firewall for small and medium offices, with secure networking and threat protection options.", ["Firewall and VPN features", "Secure office networking", "Threat protection options", "Suitable for small and medium offices"]],
    "synology-ds224-plus": ["Synology DS224+", "BACKUP · STORAGE", "assets/img/products/s.jpeg", "KES 78,000", "Two-bay NAS platform for shared files, local backups, and private business storage.", ["Two drive bays", "Shared file storage", "Local backup support", "Private business cloud options"]],
    "apc-easy-ups-1-5kva": ["APC Easy UPS 1.5kVA", "POWER PROTECTION", "assets/img/products/a.jpeg", "KES 32,000", "Battery backup and voltage protection for networking equipment, workstations, and essential office devices.", ["1.5kVA capacity", "Battery backup", "Voltage protection", "Suitable for network and office equipment"]],
    "dell-poweredge-t350": ["Dell PowerEdge T350", "SERVER · TOWER", "assets/img/products/Dell_PowerEdge_T350.jpg", "KES 295,000", "Scalable tower server for file sharing, business applications, databases, and growing office workloads.", ["Scalable tower design", "Business application support", "File and database workloads", "Configurable storage and memory"]],
    "hpe-proliant-dl360-gen11": ["HPE ProLiant DL360 Gen11", "SERVER · RACK", "assets/img/products/HPE ProLiant DL360 Gen11.jpeg", "KES 495,000", "Compact rack server for virtualisation, central applications, and high-availability office infrastructure.", ["Compact rack form factor", "Virtualisation support", "Central application workloads", "Enterprise configuration options"]],
    "lenovo-thinkpad-l14": ["Lenovo ThinkPad L14", "LAPTOP · BUSINESS", "assets/img/products/Lenovo ThinkPad L14.jpg", "KES 98,000", "Reliable 14-inch business laptop with strong security, comfortable connectivity, and all-day productivity.", ["14-inch display", "Business security features", "Professional connectivity", "Productivity-focused design"]],
    "hp-probook-450-g10": ["HP ProBook 450 G10", "LAPTOP · BUSINESS", "assets/img/products/HP ProBook 450 G10.jpeg", "KES 92,000", "Versatile business laptop for office teams, remote work, meetings, and everyday productivity.", ["15-inch business display", "Modern Intel processor options", "Business security features", "Suitable for office teams"]],
    "fortinet-fortigate-80f": ["Fortinet FortiGate 80F", "NETWORK SECURITY", "assets/img/products/Forbinet Fortigate 90f.jpg", "KES 145,000", "Higher-capacity firewall platform for offices that need secure internet, VPN, and threat protection.", ["Higher-capacity firewall", "Secure VPN connectivity", "Threat protection", "Designed for growing offices"]],
    "ubiquiti-unifi-dream-machine-pro": ["Ubiquiti UniFi Dream Machine Pro", "NETWORKING", "assets/img/products/Ubiquiti UniFi Dream Machine Pro.png", "KES 85,000", "Central network gateway for managed Wi-Fi, routing, firewall policies, and office visibility.", ["Managed routing", "Firewall policy controls", "UniFi network management", "Office network visibility"]],
    "synology-ds923-plus": ["Synology DS923+", "BACKUP · STORAGE", "assets/img/products/Synology DS923+.jpg", "KES 128,000", "Expandable business NAS for shared files, automated backups, collaboration, and secure remote access.", ["Four drive bays", "Expandable storage", "Automated backup support", "Secure remote access"]],
    "qnap-ts-464": ["QNAP TS-464", "BACKUP · STORAGE", "assets/img/products/QNAP TS-464.jpeg", "KES 115,000", "Four-bay storage platform for business file sharing, snapshots, and multi-device backup.", ["Four drive bays", "Business file sharing", "Snapshot support", "Multi-device backup"]],
    "apc-smart-ups-2200va": ["APC Smart-UPS 2200VA", "POWER PROTECTION", "assets/img/products/APC Smart-UPS 2200VA.jpeg", "KES 155,000", "Managed battery backup for servers, network cabinets, and critical office equipment.", ["2.2kVA capacity", "Managed battery backup", "Server and network protection", "Runtime options available"]],
    "apc-back-ups-900va": ["APC Back-UPS 900VA", "POWER PROTECTION", "assets/img/products/APC Back-UPS 900VA.jpg", "KES 18,500", "Compact power protection for desktops, routers, point-of-sale systems, and small workstations.", ["900VA capacity", "Compact desktop design", "Router and workstation protection", "Battery backup"]],
    "tp-link-omada-eap650": ["TP-Link Omada EAP650", "WIRELESS NETWORKING", "assets/img/products/TP-Link Omada EAP650.jpeg", "KES 19,500", "Business Wi-Fi 6 access point for fast, stable wireless coverage and centrally managed networks.", ["Wi-Fi 6 connectivity", "Central management support", "Business wireless coverage", "Suitable for office networks"]],
    "dell-poweredge-r250": ["Dell PowerEdge R250", "SERVER · RACK", "assets/img/products/Dell_PowerEdge_T350.jpg", "KES 245,000", "Entry-level rack server for shared services, file storage, identity management, and branch offices.", ["Entry-level rack design", "File and identity services", "Branch office support", "Configurable storage"]],
    "lenovo-thinkpad-t14-gen-5": ["Lenovo ThinkPad T14 Gen 5", "LAPTOP · PREMIUM", "assets/img/products/lenovo.avif", "KES 145,000", "Premium business laptop with durable construction, modern security, and dependable mobility.", ["Premium 14-inch design", "Modern security features", "Durable business construction", "Mobile productivity"]],
    "hp-zbook-firefly-14": ["HP ZBook Firefly 14", "LAPTOP · WORKSTATION", "assets/img/products/HP ProBook 450 G10.jpeg", "KES 185,000", "Professional mobile workstation for design, analysis, content creation, and demanding business work.", ["Mobile workstation design", "Professional graphics options", "Content creation support", "Portable performance"]]
  };

  const key = new URLSearchParams(window.location.search).get("product");
  const product = products[key] || products["dell-poweredge-t150"];
  const [name, category, image, price, description, specifications] = product;
  const subject = encodeURIComponent(name + " order enquiry");

  document.title = name + " | Imara IT Solutions";
  document.querySelector("#product-heading").textContent = name;
  document.querySelector("#product-breadcrumb-name").textContent = name;
  document.querySelector("#product-category").textContent = category;
  document.querySelector("#product-description").textContent = description;
  document.querySelector("#product-price").textContent = price;
  document.querySelector("#product-code").textContent = "IM-" + key.toUpperCase().replace(/[^A-Z0-9]+/g, "-");
  const imageElement = document.querySelector("#product-image");
  imageElement.src = image;
  imageElement.alt = name;
  document.querySelector("#product-order").href = "mailto:support@imaratech.co.ke?subject=" + subject;
  document.querySelector("#product-specifications").innerHTML = specifications.map(function (item) {
    return '<div class="col-md-6"><div class="product-specification"><i class="bi bi-check2-circle"></i><span>' + item + "</span></div></div>";
  }).join("");
}());
