class RandomizedSet {
  map: Map<number, number>;
  constructor() {
    this.map = new Map();
  }

  insert(val: number): boolean {
    if (this.map.has(val)) return false;
    this.map.set(val, this.map.size);
    return true;
  }

  remove(val: number): boolean {
    if (!this.map.has(val)) return false;
    const last = this.map.get(val)!;
    this.map.delete(val);
    this.map.forEach((value, key) => {
      if (value > last) this.map.set(key, value - 1);
    });
    return true;
  }

  getRandom(): number {
    const keys = Array.from(this.map.keys());
    return keys[Math.floor(Math.random() * keys.length)];
  }
}

/**
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */
/**
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */
