<span style="color:#08ccfc; font-family: 'OCR A Std', sans-serif;" >Sat</span><span style="color:#000000; font-family: 'OCR A Std', sans-serif;">Dent</span>

# SatDent SA

**SatDent** es un grupo de emprendedores que se encargan de reparar la maquinaria tanto de clínicas dentales como laboratorios protésicos."


## Generate certificate ssl each 3 months
```
sudo certbot certonly -d '*.satdent.es' --manual --preferred-challenges dns
```

Include TXT in DonDominio

```
nslookup -type=TXT _acme-challenge.satdent.es 
```


