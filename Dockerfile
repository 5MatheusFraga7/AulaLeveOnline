FROM ruby:2.5.7

ENV RAILS_ENV=production
ENV DISABLE_DATABASE_ENVIRONMENT_CHECK=1

RUN apt-get update
RUN apt-get install nodejs npm -y

RUN bundle config --global frozen 1

WORKDIR /usr/src/app

COPY Gemfile Gemfile.lock ./
RUN bundle install

COPY . .

ENV DB_DATABASE=aulaleve
ENV DB_HOST=192.168.0.110
ENV DB_PORT=5433
ENV DB_USER=ruby
ENV DB_PASSWORD=test123

RUN rake db:schema:load
RUN rake db:migrate
RUN rake db:seed
RUN rake assets:precompile

CMD ["rails", "s", "-b", "0.0.0.0"]