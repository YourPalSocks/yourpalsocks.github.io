from os import path
from pathlib import Path
import sys

from flask import Flask, render_template
from flask_frozen import Freezer

template_folder = path.abspath('./website')

app = Flask(__name__, template_folder=template_folder)
app.config['FREEZER_DESTINATION'] = 'github-pages'
app.config['FREEZER_RELATIVE_URLS'] = True
app.config['FREEZER_IGNORE_MIMETYPE_WARNINGS'] = True
freezer = Freezer(app)

@app.cli.command()
def freeze():
    freezer.freeze()

@app.cli.command()
def serve():
    freezer.run()

@app.route('/')
def home():
    return render_template('pages/index.html')

@app.route('/<page>')
def pages(page):
    return render_template(str(Path('pages')) + '/' + page.lower() + '.html')

@app.route('/blog/<page>')
def blog_page(page):
    return render_template(str(Path('blog_pages')) + '/' + page.lower() + '.html')

if __name__ == "__main__":
    if len(sys.argv) > 1 and sys.argv[1] == "build":
        freezer.freeze()
    else:
        app.run(port=8080)