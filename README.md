# [Telepost](https://telepost.me/) <img src="images/telepost_icon-194x194.png" alt="Telepost logo" align="right" />
[![Build Status](https://travis-ci.com/Telepost-me/telepost-me.github.io.svg?branch=master)](https://travis-ci.com/Telepost-me/telepost-me.github.io)
[![Security](https://hakiri.io/github/Telepost-me/telepost-me.github.io/master.svg)](https://hakiri.io/github/Telepost-me/telepost-me.github.io/master)
[![Build status](https://ci.appveyor.com/api/projects/status/fae40em4uff3avkp/branch/master?svg=true)](https://ci.appveyor.com/project/nikolaev-rd/telepost-me-github-io/branch/master)
[![Hits](https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Fgithub.com%2FTelepost-me%2Ftelepost-me.github.io&count_bg=%2379C83D&title_bg=%23555555&icon=telegram.svg&icon_color=%23F5F5F5&title=hits&edge_flat=false)](https://hits.seeyoufarm.com)


**Лучший отложенный постинг для Телеграм!**

Telepost помогает администраторам каналов сократить рутинную работу и сосредоточиться на производстве качественного контента. Здесь есть отложенные посты, визуальный редактор, совместная работа и многое другое. А главное — это совершенно **бесплатно**!

## FAQ
Прежде, чем задавать вопрос — [прочти FAQ](https://telepost-me.github.io/faq)!

## Поддержка
* [Телеграм-чат](https://t.me/joinchat/KL_EBhbpHVuFmf_LDAHmTQ)
* [Известные баги](https://github.com/Telepost-me/support/issues?q=is%3Aissue+is%3Aopen+label%3Abug)
* [Список идей](https://github.com/Telepost-me/support/issues?q=is%3Aissue+is%3Aopen+label%3Aidea)

## Отладка (Mac OS X)

Для запуска и проверки сайта локально нужно [установить и настроить все необходимое](https://docs.github.com/en/github/working-with-github-pages/testing-your-github-pages-site-locally-with-jekyll).

### Подготовка

1. [Установка XCode](https://developer.apple.com/xcode/)
   ```bash
   xcode-select --install
   ```

2. [Установка Jekyll](https://jekyllrb.com/docs/installation/macos/)
   ```bash
   gem install jekyll bundler
   ```

3. Проверяем версию [Ruby](https://www.ruby-lang.org/) (обычно уже есть не ниже 2.6) — пригодится в п.5:
   ```bash
   ruby -v

   # видим примерно такой вывод:
   # ruby 2.6.3p62 (2019-04-16 revision 67580) [universal.x86_64-darwin19]
   ```
   Если нет, то ставим через [Homebrew](https://brew.sh):
   ```bash
   brew install ruby
   ```

4. Смотрим какой у вас shell:
   ```bash
   echo $SHELL
   ```
   и добавляем Ruby в `PATH`:
   ```bash
   # для ZSH
   echo 'export PATH="/usr/local/opt/ruby/bin:$PATH"' >> ~/.zshrc

   # для Bash
   echo 'export PATH="/usr/local/opt/ruby/bin:$PATH"' >> ~/.bash_profile
   ```

5. Ставим [Bundler](https://bundler.io) и [Jekyll](https://jekyllrb.com) локально:
   ```bash
   gem install --user-install bundler jekyll
   ```
   и добавляем в `PATH` (вместо `X.X` в `X.X.0` подставляем версию Ruby из п.3, например для версии `2.6.3` вставляем ниже `2.6.0`):
   ```bash
   # для ZSH
   echo 'export PATH="$HOME/.gem/ruby/X.X.0/bin:$PATH"' >> ~/.zshrc

   # для Bash
   echo 'export PATH="$HOME/.gem/ruby/X.X.0/bin:$PATH"' >> ~/.bash_profile
   ```

6. Проверяем, что все сделано правильно:
   ```bash
   gem env  # будет длинный вывод RubyGems Environment
   ```

7. Ставим все зависимости из [Gemfile](Gemfile):
   ```bash
   bundle install
   
   # периодически надо выполнять обновление:
   bundle update
   ```

### Запуск

* Запускаем сайт локально:
  ```bash
  bundle exec jekyll serve
  ```

* Ваш сайт должен быть доступен по адресу: http://127.0.0.1:4000/

### Линтер [HTMLProofer](https://github.com/gjtorikian/html-proofer)

* Установка 
  ```bash
  # локальная установка линтера
  gem install --user-install html-proofer
  ```

* Билд сайта и запуск линтера :
  ```bash
  # билд html-версии сайта
  bundle exec jekyll build
  
  # запуск линтера с проверкой синтаксиса HTML, но без проверки ссылок на внешние ресурсы
  htmlproofer ./_site --check-html --disable-external
  ```

## Автор
По всем вопросам: [@Nikolaev-RD](https://github.com/nikolaev-rd)
