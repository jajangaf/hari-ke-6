const user = {
    name: 'Budi',
    sayHi: function() {
        console.log(`Halo, nma saya ${this.name}`);

        setTimeout(() => {
            console.log(`setelah 1 detik, nama saya ${this.name}`);
        }, 1000);
    }
};

user.sayHi();