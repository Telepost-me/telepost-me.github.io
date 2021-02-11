# [Telepost](https://telepost.me/) <img src="https://app.telepost.me/assets/favicons/icon-194x194.png" alt="Telepost logo" align="right" />
[![Build Status](https://travis-ci.com/Telepost-me/telepost-me.github.io.svg?branch=master)](https://travis-ci.com/Telepost-me/telepost-me.github.io)
[![Security](https://hakiri.io/github/Telepost-me/telepost-me.github.io/master.svg)](https://hakiri.io/github/Telepost-me/telepost-me.github.io/master)
[![Build status](https://ci.appveyor.com/api/projects/status/fae40em4uff3avkp/branch/master?svg=true)](https://ci.appveyor.com/project/nikolaev-rd/telepost-me-github-io/branch/master)


**Лучший отложенный постинг для Телеграм!**

Telepost помогает администраторам каналов сократить рутинную работу и сосредоточиться на производстве качественного контента. Здесь есть отложенные посты, визуальный редактор, совместная работа и многое другое. А главное — это совершенно **бесплатно**!

## FAQ
Прежде, чем задавать вопрос, [прочти это](https://telepost-me.github.io/faq)!

## Поддержка
* [Телеграм-чат](https://t.me/joinchat/KL_EBhbpHVuFmf_LDAHmTQ)
* [Известные баги](https://github.com/Telepost-me/support/issues?q=is%3Aissue+is%3Aopen+label%3Abug)
* [Список идей](https://github.com/Telepost-me/support/issues?q=is%3Aissue+is%3Aopen+label%3Aidea)

## Отладка (MacOSX)

Для запуска и проверки сайта локально необходимо [установить и настроить все необходимое](https://docs.github.com/en/github/working-with-github-pages/testing-your-github-pages-site-locally-with-jekyll). Ниже инструкция для MacOSX


1. Установка XCode
   ```bash
   xcode-select --install
   ```

2. [Установка Jekyll](https://jekyllrb.com/docs/installation/macos/)
   ```bash
   gem install jekyll bundler
   ```

3. Проверяем версию Ruby (обычно уже есть не ниже 2.6) — пригодится в п.5:
   ```bash
   ruby -v

   # видим примерно такой вывод:
   # ruby 2.6.3p62 (2019-04-16 revision 67580) [universal.x86_64-darwin19]
   ```
   Если нет, то ставим через Homebrew:
   ```bash
   brew install ruby
   ```

4. Смотрим какой у вас shell:
   ```bash
   echo $SHELL
   ```
   и добавляем Ruby в PATH:
   ```bash
   # для ZSH
   echo 'export PATH="/usr/local/opt/ruby/bin:$PATH"' >> ~/.zshrc

   # для Bash
   echo 'export PATH="/usr/local/opt/ruby/bin:$PATH"' >> ~/.bash_profile
   ```

5. Ставим Jekyll локально:
   ```bash
   gem install --user-install bundler jekyll
   ```
   и добавляем в PATH (вместо `X.X` в `X.X.0` подставляем версию Ruby из п.3, например для версии `2.6.3` вставляем ниже `2.6.0`):
   ```bash
   # смотрим какой у вас shell
   echo $SHELL

   # для ZSH
   echo 'export PATH="$HOME/.gem/ruby/X.X.0/bin:$PATH"' >> ~/.zshrc

   # для Bash
   echo 'export PATH="$HOME/.gem/ruby/X.X.0/bin:$PATH"' >> ~/.bash_profile
   ```

6. Проверяем, что все сделано правильно:
   ```bash
   gem env
   ```

7. Ставим все зависимости:
   ```bash
   bundle install
   
   # периодически надо выполнять обновление:
   bundle update
   ```

8. Запускаем сайт локально:
   ```bash
   bundle exec jekyll serve
   ```

9. Ваш сайт должен быть доступен по адресу: http://127.0.0.1:4000/

10. Установка и запуск линтера [HTMLProofer](https://github.com/gjtorikian/html-proofer):
   ```bash
   # установка линтера
   gem install --user-install html-proofer

   # билд html-версии сайта
   bundle exec jekyll build

   # запуск линтера с проверкой синтаксиса HTML, но без проверки ссылок на внешние ресурсы
   htmlproofer ./_site --check-html --disable-external
   ```

## Автор
По всем вопросам: [@Nikolaev-RD](https://github.com/nikolaev-rd)
