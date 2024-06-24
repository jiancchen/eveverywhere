export interface ChargerItem {
    id: number;
    name: string;
    inUse: number;
    available: number;
    costPerKWH: number;
    chargeSpeed: number;
    address: string;
    lat: number;
    lng: number;
    company: string;
  }
  
  function generateRandomName(): string {
    const adjectives = ["Fast", "Eco", "Quick", "Rapid", "Ultra", "Power", "Mega", "Super", "Express", "Instant"];
    const nouns = ["Charge", "Energy", "Power", "Boost", "Bolt", "Surge", "Jolt", "Volt", "Amp", "Watt"];
    const adjective = adjectives[Math.floor(Math.random() * adjectives.length)];
    const noun = nouns[Math.floor(Math.random() * nouns.length)];
    return `${adjective} ${noun}`;
  }
  
  function generateChargers(): ChargerItem[] {
    const chargers: ChargerItem[] = [];
    for (let i = 0; i < 10; i++) {
      chargers.push({
          id: i,
          name: generateRandomName(),
          inUse: 2,
          available: 4,
          costPerKWH: 0.55,
          chargeSpeed: 2,
          address: "",
          lat: 34.0195 + Math.random() * 0.1 - 0.05, // Random lat around Santa Monica
          lng:  -118.4912 + Math.random() * 0.1 - 0.05, // Random lng around Santa Monica
          company: "EVCS",
      });
    }
    return chargers;
  }
  
  // Fake API function
  export async function fetchChargers(): Promise<ChargerItem[]> {
    return new Promise((resolve) => {
      setTimeout(() => resolve(generateChargers()), 500); // Simulate async operation with setTimeout
    });
  }
  
  // Example usage
//   fetchChargers().then(chargers => console.log(chargers));