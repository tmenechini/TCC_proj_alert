import pyautogui
import numpy as np
import cv2
import requests

################PRIMEIRA PARTE DO CÓDIGO
#Chamar pyautigui, buscar a imagem no site do ipmet e fazer um print da telahttps://www.ipmetradar.com.br/alerta/ppigis/index.php
pyautogui.press('win')
pyautogui.write('Chrome')
pyautogui.press('Enter')
pyautogui.PAUSE = 3
pyautogui.hotkey('Ctrl', 't')
pyautogui.PAUSE = 2
pyautogui.write('https://www.ipmetradar.com.br/alerta/ppigis/index.php')
pyautogui.press('Enter')
pyautogui.PAUSE = 5
#aqui vai depender de cada resolução de tela, para a minha estava 1366x768
pyautogui.moveTo(1213, 183, duration=1)
pyautogui.doubleClick()

pyautogui.moveTo(1213, 273, duration=1)
pyautogui.doubleClick()

pyautogui.moveTo(602, 478, duration=1)
pyautogui.doubleClick()

pyautogui.moveTo(520, 540, duration=0.1)
pyautogui.doubleClick()

pyautogui.moveTo(670, 470, duration=0.01)
pyautogui.doubleClick()

#pyautogui.moveTo(700, 450, duration=0.01)
#pyautogui.doubleClick()

x1 = pyautogui.screenshot()
x1.save('Imagem_teste.jpg')

#Fecha a janela do chrome
pyautogui.hotkey('Ctrl', 'F4')
pyautogui.hotkey('Ctrl', 'F4')
pyautogui.hotkey('Esc')

#Obtendo a imagem - aqui partiu do principio que já tem o print da tela
recorte = cv2.imread('Imagem_teste.jpg')

##################### SEGUNDA PARTE DO CODIGO MASCARA
#aqui faz os dois recortes de tela - para
imageRegiaoAvare = recorte[135:610, 400:1100]
imageAvare = recorte[380:445, 650:770]

# Caso fique muito demorada a análise tem que diminuir a imagem
#imageRegiaoAvare = cv2.resize(imagemRegiaoAvare, (350, 237))

# Converte imagem para HSV
hsv = cv2.cvtColor(imageRegiaoAvare, cv2.COLOR_BGR2HSV)
hsv2 = cv2.cvtColor(imageAvare, cv2.COLOR_BGR2HSV)

# Define o maximo e minimo do Vermelho em valores de HSV
lower = np.array([0, 65, 75])
upper = np.array([16, 255, 255])

# Aplicação do Filtro
maskRegiaoAvare = cv2.inRange(hsv, lower, upper)
maskAvare = cv2.inRange(hsv2, lower, upper)

#Salva o arquivo com a mascara
cv2.imwrite('Imagem_preta_teste_mask_regiao_avare.jpg', maskRegiaoAvare)
cv2.imwrite('Imagem_resposta_mask_avare.jpg', maskAvare)
#cv2.imwrite('Imagem_teste_mask_avare_teste2.jpg', imageAvare)

# Imagens que quer exibir - SERVE PARA TESTE
#cv2.imshow("Mask_recorte Região de Avare", maskRegiaoAvare)
#cv2.imshow("Mask_recorte Avare", maskAvare)
#cv2.imshow("Imagem Avare", imageAvare)
#cv2.imshow("Imagem Regiao de Avare", imageRegiaoAvare)

cv2.imwrite('TRABALHOImagem_teste_mask_avare.jpg', maskAvare)
cv2.imwrite('TRABALHOImagem_teste_mask_regiao_avare.jpg', maskRegiaoAvare)
cv2.imwrite('TRABALHOImagem_teste_avare.jpg', imageAvare)
cv2.imwrite('TRABALHOImagem_teste_regiao_avare.jpg', imageRegiaoAvare)

############TERCEIRA PARTE DO CÓDIGO
###ANALISE CIDADE DE AVARE
#imagem1 que vai chegar - ela que será comparada com outra# VER QUAL IMAGEM TEM QUE CHEGAR AQUI
image = cv2.imread('Imagem_resposta_mask_avare.jpg')

gray_image = cv2.cvtColor(image, cv2.COLOR_BGR2GRAY)
histogram = cv2.calcHist([gray_image], [0],
                         None, [256], [0, 256])
#imagem2 imagem preta
image1 = cv2.imread('Imagem_preta_teste_mask_avare.jpg')
gray_image1 = cv2.cvtColor(image1, cv2.COLOR_BGR2GRAY)
histogram1 = cv2.calcHist([gray_image1], [0],
                          None, [256], [0, 256])

image2 = cv2.imread('Imagem_teste_mask_avare_teste2.jpg')
gray_image2 = cv2.cvtColor(image2, cv2.COLOR_BGR2GRAY)
histogram2 = cv2.calcHist([gray_image2], [0],
                          None, [256], [0, 256])

c1, c2 = 0, 0

i = 0
while i < len(histogram) and i < len(histogram1):
    c1 += (histogram[i] - histogram1[i]) ** 2
    i += 1
c1 = c1 ** (1 / 2)

i = 0
while i < len(histogram) and i < len(histogram2):
    c2 += (histogram[i] - histogram2[i]) ** 2
    i += 1
c2 = c2 ** (1 / 2)

if (c1 < c2):
    print("Análise de imagem ok - não foi identificado chuva forte em Avaré")
    requisicao = requests.get("https://tcc-group4.herokuapp.com/api/v8/chuva/0")
else:
    print("Análise de imagem ok - foi identificado chuva forte em Avaré")
    requisicao = requests.get("https://tcc-group4.herokuapp.com/api/v8/chuva/1")
###ANALISE REGIAO DE AVARE
#imagem1 que vai chegar - ela que será comparada com outra# VER QUAL IMAGEM TEM QUE CHEGAR AQUI
image3 = cv2.imread('Imagem_resposta_mask_regiao_avare.jpg')

gray_image3 = cv2.cvtColor(image3, cv2.COLOR_BGR2GRAY)
histogram3 = cv2.calcHist([gray_image3], [0],
                         None, [256], [0, 256])
#imagem2 imagem preta
image4 = cv2.imread('Imagem_preta_teste_mask_regiao_avare.jpg')
gray_image4 = cv2.cvtColor(image4, cv2.COLOR_BGR2GRAY)
histogram4 = cv2.calcHist([gray_image4], [0],
                          None, [256], [0, 256])

image5 = cv2.imread('Imagem_teste_mask_regiao_avare_teste2.jpg')
gray_image5 = cv2.cvtColor(image5, cv2.COLOR_BGR2GRAY)
histogram5 = cv2.calcHist([gray_image5], [0],
                          None, [256], [0, 256])

c1, c2 = 0, 0

i = 0
while i < len(histogram3) and i < len(histogram4):
    c1 += (histogram3[i] - histogram4[i]) ** 2
    i += 1
c1 = c1 ** (1 / 2)

i = 0
while i < len(histogram3) and i < len(histogram5):
    c2 += (histogram3[i] - histogram5[i]) ** 2
    i += 1
c2 = c2 ** (1 / 2)

if (c1 < c2):
    print("Análise de imagem ok - não foi identificado chuva forte nas proximidades de Avaré")
else:
    print("Análise de imagem ok - foi identificado chuva forte nas proximidades de Avaré")
# Faz o python esperar
cv2.waitKey(0)
cv2.destroyAllWindows()
