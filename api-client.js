// Data binnenhalen

const baseUrl = 'http://localhost:3000/';

async function getData() { 
    try {
        const response = await fetch(baseUrl, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });
        const data = await response.json();
        console.log("Get request for data", data);
        return data;
    } catch (err) {
        console.log(err, "Didn't work");
    }
};

// Data posten

async function postData(input) { 
    try {
        const data = {"desciption": input, "done": false};
        const response = await fetch(baseUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });
        const json = await response.json();
        console.log(json);
        return json._id;
    } catch (err) {
        console.log(err, "Didn't work");
    }
};


// Data deleten

const deleteData = async function (_id) {
    try {
        const response = await fetch('http://localhost:3000/'+_id, {
            method: "DELETE",
        });
    } catch (err) {
        console.log(err, "Not deleted");
    }
}