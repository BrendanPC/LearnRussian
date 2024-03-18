import re
splitc = '\t'

f = open('dictionary.txt', 'r', encoding='utf-8')
dict = open('dictionary.js', 'w', encoding='utf-8')
dict.write('var DICTIONARY = [')


f = sorted(f, key=lambda x: len(x.split(splitc)[1]))

for line in f:
	words = re.split('[\t]', line)
	definitions = re.split('[;,/]', words[2])
	for english in definitions:
		description = ''
		engl = english.split('(')
		print(engl)
		if len(engl) > 1:
			description = engl[1][:-2]
		dict.write('[\"' + engl[0].strip() + '\",\"' + words[1].strip() + '\",\"' + description + '\"],\n')
	
dict.write('];')