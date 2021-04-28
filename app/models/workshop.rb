class Workshop < ApplicationRecord

	belongs_to :user
	belongs_to :types_institution
	belongs_to :estado

	before_create :generate_hash_evaluation

	after_create :generate_link_evaluation

	def generate_hash_evaluation
		self.hash_evaluation = loop do
		  random_token = SecureRandom.urlsafe_base64(25, false)
		  break random_token unless Workshop.exists?(hash_evaluation: random_token)
		end
	end

	def generate_link_evaluation
		self.evaluation_link = "http://localhost:3000/evaluation/"+self.hash_evaluation
		self.save
	end

end
