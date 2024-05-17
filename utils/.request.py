######Security Copy######

import requests

url = "https://toolboardy.netlify.app/"


response = requests.get(url)

if response.status_code == 200:
    print("La solicitud fue exitosa")

    fs = open('./data/security', 'w')
    fs.write(str(response.content))


else:
    print(f"Error al hacer la solicitud: {response.status_code}")
