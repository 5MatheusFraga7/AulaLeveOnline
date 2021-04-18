class Estado < ActiveRecord::Base

	# attr_accessible :sigla
	# attr_accessible :nome

    # ###  Rails Admin  ###

    # rails_admin do
    #     navigation_label 'Estado'
    #     label 'Regiões'
    #     label_plural 'Estados'
    #     weight 3501
    #     configure :id do label 'ID' end        
    #     configure :sigla do label 'Sigla' end
    #     configure :nome do label 'Nome' end
    #     configure :created_at do label 'Criado'; strftime_format "%d/%m/%Y %H:%M:%S" end
    #     configure :updated_at do label 'Atualizado'; strftime_format "%d/%m/%Y %H:%M:%S" end
    #     list do
    #         field :sigla
    #         field :nome
    #         field :created_at
    #         field :updated_at
    #     end
    #     show do
    #         field :sigla
    #         field :nome
    #         field :created_at
    #         field :updated_at
    #     end
    #     edit do
    #         field :sigla
    #         field :nome
    #         field :created_at
    #         field :updated_at
    #     end
    # end
	
end
