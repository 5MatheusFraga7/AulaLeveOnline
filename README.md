# README

Esta aplicação utiliza Ruby on Rails, então sga os passos a baixo para fazer o arquivo rodar em distribuições linux.

1) Baixar o Gerenciador

  # Rode os comandos para baixar o rmv(Gerenciador de versões do ruby):

  sudo apt-get --assume-yes update  
  command curl -sSL https://rvm.io/mpapis.asc | gpg --import -  
  curl -L https://get.rvm.io | bash -s stable  
  source ~/.rvm/scripts/rvm 
  
2) Baixar o Ruby 

  # Rode os comandos para baixar o ruby e o Rails
  
   rvm install 2.5.7p206
   rvm use 2.5.7p206 --default  
   ruby -v 
   
   gem install rails
   


3) Instalando as gems

    bundle install

4) Configurar o banco

    Caso dê erro, lembre-se de entrar na pasta do projeto e de rodar o comando source /etc/profile.d/rvm.sh
    
    rake db:create
    rails g devise user 
    rake db:schema:load
    rake db:migrate
    rake db:seed
    
5) Rode o servidor:
   
   rails s
   
   Se acontecer algum problema, pode ser por causa da configuração da versão do ruby ou do rails, dê uma olhada na pasta databse.yml onde possui a configuração do postgres, é necessário ter o mesmo instalado.
   
   Seguem alguns tutoriais:
   
   https://guides.rubyonrails.org/
   https://medium.com/@caroangsiqueira/primeiros-passos-com-ruby-on-rails-b9bc6e8b460f
   http://guides.railsgirls.com/guides-ptbr/devise
   https://onebitcode.com/permissoes-de-acesso-rails-usando-devise-e-cancancan/
   https://dev.to/neshaz/how-to-use-rake-db-commands-in-the-correct-way--50o2
   
     
     
   
