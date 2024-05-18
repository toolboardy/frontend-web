######Security Copy######

import requests

def urlY():
    return "https://toolboardy.netlify.app/"


url = "https://toolboardy.netlify.app/"


response = requests.get(url)

if response.status_code == 200:
    print("La solicitud fue exitosa")

    fs = open('../data/security', 'w')
    fs.write(str(response.content))


else:
    print(f"Error al hacer la solicitud: {response.status_code}")
