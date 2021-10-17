# [Telepost](https://telepost.me/) <img src="images/telepost_icon-194x194.png" alt="Telepost logo" align="right" />
[![Build Status](https://travis-ci.com/Telepost-me/telepost-me.github.io.svg?branch=master)](https://travis-ci.com/Telepost-me/telepost-me.github.io)
[![Security](https://hakiri.io/github/Telepost-me/telepost-me.github.io/master.svg)](https://hakiri.io/github/Telepost-me/telepost-me.github.io/master)
[![Build status](https://ci.appveyor.com/api/projects/status/fae40em4uff3avkp/branch/master?svg=true)](https://ci.appveyor.com/project/nikolaev-rd/telepost-me-github-io/branch/master)
[![Hits](https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Fgithub.com%2FTelepost-me%2Ftelepost-me.github.io&count_bg=%2379C83D&title_bg=%23555555&icon=telegram.svg&icon_color=%23F5F5F5&title=hits&edge_flat=false)](https://hits.seeyoufarm.com)
[![Telepost Support — chat](https://shields.io/badge/Telepost-Чат-green?logo=telegram&style=social)](https://t.me/joinchat/Ypg01CdfpW5jNWFi)

<p align="center">
   <a href="README.md">🇷🇺 Русский</a> | <a href="README.en.md">🇺🇸 English</a>
</p>

**The best postponed posting for Telegram!**

Telepost helps channels administrators cut down on routine work and focus on producing quality content. It has deferred posts, a visual editor, collaboration, and more. And most importantly, completely **free**!

## FAQ
Before asking a question — [read the FAQ](https://telepost-me.github.io/faq)!

## Support
* [Telegram chat](https://t.me/joinchat/Ypg01CdfpW5jNWFi)
* [Known bugs](https://github.com/Telepost-me/support/issues?q=is%3Aissue+is%3Aopen+label%3Abug)
* [Ideas list](https://github.com/Telepost-me/support/issues?q=is%3Aissue+is%3Aopen+label%3Aidea)

## Debugging (Mac OS X)

To launch and verify site local, your need to [install & configure all required components](https://docs.github.com/en/github/working-with-github-pages/testing-your-github-pages-site-locally-with-jekyll).

### Preparation

1. [Install XCode](https://developer.apple.com/xcode/)
   ```bash
   xcode-select --install
   ```

2. [Install Jekyll](https://jekyllrb.com/docs/installation/macos/)
   ```bash
   gem install jekyll bundler
   ```

3. Check version of [Ruby](https://www.ruby-lang.org/) (usually already exist v2.6 or higher) — this information will be needed at step #5:
   ```bash
   ruby -v

   # your will see something like this:
   # ruby 2.6.3p62 (2019-04-16 revision 67580) [universal.x86_64-darwin19]
   ```
   If not, then your need to install it through [Homebrew](https://brew.sh):
   ```bash
   brew install ruby
   ```

4. Check your current shell:
   ```bash
   echo $SHELL
   ```
   and add Ruby to `PATH`:
   ```bash
   # for ZSH
   echo 'export PATH="/usr/local/opt/ruby/bin:$PATH"' >> ~/.zshrc

   # for Bash
   echo 'export PATH="/usr/local/opt/ruby/bin:$PATH"' >> ~/.bash_profile
   ```

5. Install [Bundler](https://bundler.io) & [Jekyll](https://jekyllrb.com) local:
   ```bash
   gem install --user-install bundler jekyll
   ```
   and add it to `PATH` (replace `X.X` in `X.X.0` with Ruby version from step #3, example for version `2.6.3` add `2.6.0`):
   ```bash
   # for ZSH
   echo 'export PATH="$HOME/.gem/ruby/X.X.0/bin:$PATH"' >> ~/.zshrc

   # for Bash
   echo 'export PATH="$HOME/.gem/ruby/X.X.0/bin:$PATH"' >> ~/.bash_profile
   ```

6. Check, that all was done right:
   ```bash
   gem env
   # long output RubyGems Environment will be here
   ```

7. Install all dependences from [Gemfile](Gemfile):
   ```bash
   bundle install
   
   # your need to update it periodically:
   bundle update
   ```

### Launch

* Launching site local:
  ```bash
  bundle exec jekyll serve
  ```

* Your site will work here: http://127.0.0.1:4000/

### Linter [HTMLProofer](https://github.com/gjtorikian/html-proofer)

* Install
  ```bash
  # local installation of linter
  gem install --user-install html-proofer
  ```

* Build site & run linter:
  ```bash
  # building html-version of site
  bundle exec jekyll build
  
  # run linter with check of HTML syntax, but without checking of external links
  htmlproofer ./_site --check-html --disable-external
  ```

### Script: linter + launch

For local installation of linter & launch the site your can use this script:
```bash
./run.sh
```

## Author
* [@Nikolaev-RD](https://github.com/nikolaev-rd)
