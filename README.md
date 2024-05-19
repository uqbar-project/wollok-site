
# <img src="https://github.com/uqbar-project/wollok/blob/master/org.uqbar.project.wollok.ui/icons/wollok-logo.iconset/icon_64x64.png?raw=true"/> Wollok Site

Wollok Programming Language Web Site - Xtext implementation

Access it at : http://www.wollok.org

> Since July 2024, this website will become in low maintenance mode. Please check out [our new website](https://github.com/uqbar-project/website-wollok-ts)

# Environment Setup

**Install Ruby**: If you are in Linux, this is a good tutorial: http://tecadmin.net/install-ruby-on-rails-on-ubuntu/

```bash
git checkout gh-pages
gem install bundler
bundle install
```

# Run locally 

```bash
jekyll server --incremental --livereload
```

Incremental is important to reload changes in an active server :smile:
Livereload refreshes the content after saving the files
You can navigate a local site in http://localhost:4000 or add the parameter `--open-url` so it opens automatically

# Troubleshooting

If you see an error like "cannot load such file -- bundler (LoadError)" you should see which rake is missing, and do

```
# gem install -rake-
```

## You have activated colorator 1.0 but ...

An error like this in Linux is solved by setting "true" to "Run command as a login shell" in Terminal settings (Edit > Profile Preferences... Title and Command)

## RVM is not a function?
Ok, see these pages:
* [Linux Mint](https://forums.linuxmint.com/viewtopic.php?t=151758)
* [Ubuntu](https://rvm.io/integration/gnome-terminal)

## Strange dependencies errors
Something like

```bash
~/.rvm/gems/ruby-2.3.0/gems/bundler-1.12.5/lib/bundler/spec_set.rb:95:in `block in materialize': Could not find minitest-5.9.0 in any of the sources (Bundler::GemNotFound)
```

Try deleting Gemfile.lock and jekyll server afterwards.

# Working with the site

* Every time you make a change in a `.md` or `.html` file, it will be regenerate into _site folder.
* Changes in `_config.yml` have no effect, you have to stop & start Jekyll server

# Site Deployment 

If you push to branch **master** the site will be automatically published in netlify.

Although we don't need to do anything, here's [the tutorial that shows how to accomplish this task](https://www.netlify.com/blog/2015/10/28/a-step-by-step-guide-jekyll-30-on-netlify) just in case we forget.

# Picture effects
Images are cropped using [this online application](https://pixlr.com/express/)
Effects are
* Effect | Unicolor | Amy
* Adjustment - Color 
 * Hue -16
 * Saturation 30
 * Brightness 0
* You can also make adjustments Blur or Sharpen

