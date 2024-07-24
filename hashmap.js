class HashMap 
{
	constructor() 
	{
		this.capacity = 17;
		this.loadFactor = .75;
		this.buckets = new Array(this.capacity);
	}

	hash(key)
	{
		let hashCode = 17;
      
		const primeNumber = 31;
		for (let i = 0; i < key.length; i++) 
		{
			hashCode = primeNumber * (hashCode % this.capacity) + key.charCodeAt(i);
	    }
		return hashCode;
	}

	set(key, value)
	{
		if (this.has(key) === true) 
		{
			let index = this.hash(key) % this.capacity;
			this.buckets[index].forEach(item => {
				if (item[0] === key) {
					item[1] = value;
				}
			})
			return;
		}
		
		if ((this.length() + 1) > (this.loadFactor * this.capacity)) this.balance();

		let index = this.hash(key) % this.capacity;

		this.checkIndex(index);	


		if (this.buckets[index]) this.buckets[index].push([key, value]);
		else this.buckets[index] = [[key, value]];

		return this.buckets;
	}
	
	checkIndex(index)
	{
		if (index < 0 || index >= this.buckets.length) {
			throw new Error("Trying to access index out of bound");
		}
	}

	clear()
	{
		this.buckets = new Array(this.capacity);
		return true;
	}

	length()
	{
		let counter = 0;
		for (let i = 0; i < this.buckets.length; i++)
		{
			if (!(this.buckets[i] === undefined))
			{
				counter += Object.keys(this.buckets[i]).length
			}
		}
		return counter;
	}

	balance()
	{
		this.capacity = this.capacity * 2;
		let newMap = new Array(this.capacity);
		let e = this.entries();
		e.forEach(([key, value]) => {
			let i = this.hash(key) % this.capacity;
			if (newMap[i]) newMap[i].push([key, value]);
			else newMap[i] = [[key, value]];
		})
		return this.buckets = newMap;
	}

	get(key)
	{
		let i = this.hash(key) % this.capacity;	
		if (!this.buckets[i]) return null;
		return this.buckets[i].find(x => x[0] === key)[1];
	}

	has(key)
	{
		let i = this.hash(key) % this.capacity;
		if (!this.buckets[i]) return false;
		if (this.buckets[i].find(x => x[0] === key)) return true;
		else return false;
	}

	remove(key)
	{
		let i = this.hash(key) % this.capacity;
		if (!this.buckets[i]) return false;
		for (let l = 0; l < this.buckets[i].length; l++) 
		{
			if (this.buckets[i][l].includes(key) === false) return false;
			else if (this.buckets[i][l].includes(key) === true) 
			{
				this.buckets[i].splice(l, 1);
				return true;
			}
		}
	}

	keys()
	{
		let keyArray = [];
		for (let arr of this.buckets) 
		{
			if (!(arr === undefined))
			{
				if (arr.length === 1) keyArray.push(arr[0][0]);
				else arr.forEach(a => keyArray.push(a[0]));
			}
		}
		return keyArray;
	}

	values()
	{
		let valueArray = [];
		for (let arr of this.buckets)
		{
			if (!(arr === undefined))
			{
				if (arr.length === 1) valueArray.push(arr[0][1]);
				else arr.forEach(a => valueArray.push(a[1]));
			}
		}
		return valueArray;
	}

	entries()
	{
		let entryArray = [];
		for (let bucket of this.buckets)
		{
			if (!(bucket === undefined))
			{
				if (bucket.length === 1) entryArray.push(bucket[0]);
				else bucket.forEach(b => entryArray.push(b))
			}
		}
		return entryArray;
	}
}

export { HashMap };