import urllib.request
import re

html = urllib.request.urlopen('https://solarsquare.in/homes/').read().decode('utf-8')
urls = re.findall(r'src="([^"]+\.(?:png|jpg|jpeg|webp))"', html)

for url in set(urls):
    if any(keyword in url.lower() for keyword in ['hero', 'family', 'journey', 'home', 'trust']):
        print(url)
