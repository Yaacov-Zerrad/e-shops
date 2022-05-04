#!/usr/bin/env python
# coding: utf-8

# In[1]:


print("Affectez les variables temps et distance par les valeurs 6.892 et 19.7.Calculez et affichez la valeur de la vitesse. Améliorez l’affichage en imposant un chiffre après le point décimal")


# In[ ]:





# In[2]:


distance = 19.7
temps = 6.892



# In[3]:


def vittesseLum(distance, temps):
    tem = (temps/temps)
    dist = (distance/temps)
    print(round(dist,1),"km/h" )
    
    


# In[4]:


vittesseLum(distance, temps)


# In[ ]:





# In[15]:


import math  
float = input('float')
recup = int(float)
if recup > 0:
    print(math.sqrt(recup))
else:
    print('erreur')
   


# In[29]:


# ordoner liste
mots = ["moi", "super", "abime"]
mots.sort()
print(mots[0])
a = 'orange'
b = 'clemantine'
tailleA = len(a)
tailleB = len(b)
if tailleA > tailleB:
    print(a)
else:
    print(b)


# In[35]:


# seuil max
seuilP = 2.3
seuilV = 7.41

pressionP = int(input('pression:'))

volumeV = int(input('volume:'))

if pressionP >= seuilP and volumeV >= seuilV:
    print('stop')
elif  pressionP > seuilP:
    print('augmente volume')
elif volumeV > seuilV:
    print('baisse volume')
else:
    print('tous va bien')


# In[44]:


a = 0
b = 10
while a > b:
    a += 1
    print(a)


# In[46]:


isrt = int(input('ecrire un nombre '))
while isrt <=0 or isrt >10:
    isrt = int(input('reecrire un nombre '))
print(isrt)


# In[47]:


for i in range(1,15,3):
    print(i)


# In[48]:


for i in range(11):
    print(i)
    if i == 5:
        break


# In[50]:


for i in range(11):
    if i != 5:
        print(i)
        continue


# In[81]:


import easygui as egi
listeEntier = [1, 2, 3, 4, 5]

saisie = int(egi.integerbox())
sauve = 0
for i in listeEntier:
    if i == saisie:
        sauve = i
        break
else:
    print('pas trouver')

egi.msgbox(sauve)


# In[117]:


# trouver nombre premier
chiffre = int(input("votre chiffre: "))

n = chiffre//2 # diviser int (et no float)
print(n)
while n > 1:
    if chiffre % n == 0:
        print("non")        
        break
    n -= 1
else:
    print('oui')

    
    
    


# In[ ]:





# In[ ]:




