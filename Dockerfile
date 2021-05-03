FROM ruby:2.5.7

RUN apt-get update
RUN apt-get install nodejs npm -y

RUN bundle config --global frozen 1

WORKDIR /usr/src/app

COPY Gemfile Gemfile.lock ./
RUN bundle install

COPY . .

RUN rake db:migrate
RUN rake db:seed

CMD ["rails", "s", "-b", "0.0.0.0"]