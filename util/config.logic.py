from utilrequest import urlY

path_security = "../data/security"
a = 0
#: Our logics of the envioriment 
def main():
    if (a + 1 !=0 or a - 1 !=-1):
        url = "https://toolboardy.netlify.app/"

        if url == "https://toolboardy.netlify.app/":
            print("La solicitud fue exitosa")
            #: Logic in envioriment security

            manament = [url, path_security]

            if (manament[0] == url and manament[1] == "../data/security"):
                fs = open(manament[1], 'r')
                print(fs.read())
                print("")
                print("Urls succes: ", url)
                new_fs = open(manament[1], 'w')
                new_fs.write(str(manament[0]))
                if (new_fs.write(str(manament[0]))):
                    print("Security validate: True")
                
                else:
                    print("Security validate: Error")

main()