let codes = [{ n: "Australia", c: "AU" }, { n: "Bangladesh", c: "BD" }, { n: "Belgium", c: "BE" }, { n: "Brazil", c: "BR" }, { n: "China", c: "CN" }, { n: "Croatia", c: "HR" }, { n: "Denmark", c: "DK" }, { n: "Egypt", c: "EG" }, { n: "France", c: "FR" }, { n: "Germany", c: "DE" }, { n: "India", c: "IN" }, { n: "Iran", c: "IR" }, { n: "Iraq", c: "IQ" }, { n: "Ireland", c: "IE" }, { n: "Italy", c: "IT" }, { n: "Japan", c: "JP" }, { n: "Liechtenstein", c: "LI" }, { n: "Luxembourg", c: "LU" }, { n: "Mexico", c: "MX" }, { n: "Netherlands", c: "NL" }, { n: "Portugal", c: "PT" }, { n: "Russia", c: "RU" }, { n: "South Korea", c: "KR" }, { n: "Spain", c: "ES" }, { n: "Sweden", c: "SE" }, { n: "Switzerland", c: "CH" }, { n: "Turkey", c: "TR" }, { n: "United States", c: "US" }];

let countryInput = document.getElementById("cInput");

let getCountryData = () => {
    let client = new XMLHttpRequest();
    client.open("GET", 'https://corona.lmao.ninja/v2/countries', false);
    client.send();
    let data = JSON.parse(client.responseText);
    return data;
}

let getWorldData = () => {
    let client = new XMLHttpRequest();
    client.open("GET", 'https://corona.lmao.ninja/v2/all', false);
    client.send();
    let data = JSON.parse(client.responseText);
    return data;
}

let getArea = () => {
    if (codes.filter(code => code.c === countryInput.value.toUpperCase())) {
        let area = codes.filter(code => code.c === countryInput.value.toUpperCase())[0];
        if (!area) area = { n: 'World' };
        return area;

    }
}
countryInput.addEventListener('input', evt => {
    let areaName = getArea().n;
    let specific = getCountryData().filter(data => data.countryInfo.iso2 === getArea().c)[0];
    if (!specific) specific = getWorldData();
    changeData(areaName, specific);
})

let changeData = (areaName, data) => {
    let tDc, tDd;
    if (data.todayCases === 0) {
        tDc = data.todayCases;
    } else if (data.todayCases < 0) {
        tDc = `-${data.todayCases}`;
    } else {
        tDc = `+${data.todayCases}`;
    }
    if (data.todayDeaths === 0) {
        tDd = data.todayDeaths;
    } else if (data.todayCases < 0) {
        tDd = `-${data.todayDeaths}`;
    } else {
        tDd = `+${data.todayDeaths}`;
    }

    let cName = document.getElementById("cName").innerHTML = areaName;
    let cCases = document.getElementById("cCases").innerHTML = data.cases;
    let cDeath = document.getElementById("cDeath").innerHTML = data.deaths;
    let cAff = document.getElementById("cAff").innerHTML = getWorldData().affectedCountries;
    let cTime = document.getElementById("cTime").innerHTML = new Date(data.updated).toUTCString();
    let cTc = document.getElementById("cTc").innerHTML = tDc;
    let cTd = document.getElementById("cTd").innerHTML = tDd;
}

window.onload = changeData("World", getWorldData());
