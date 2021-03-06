# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20210613001346) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "estados", force: :cascade do |t|
    t.string   "sigla"
    t.string   "nome"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "evaluation_workshops", force: :cascade do |t|
    t.integer  "workshop_id"
    t.integer  "note"
    t.text     "user_email"
    t.text     "user_name"
    t.text     "comment"
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
    t.index ["workshop_id"], name: "index_evaluation_workshops_on_workshop_id", using: :btree
  end

  create_table "types_institutions", force: :cascade do |t|
    t.string   "code"
    t.string   "title"
    t.datetime "removed_at"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "users", force: :cascade do |t|
    t.string   "email",                  default: "", null: false
    t.string   "encrypted_password",     default: "", null: false
    t.string   "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.datetime "created_at",                          null: false
    t.datetime "updated_at",                          null: false
    t.string   "name"
    t.string   "username"
    t.index ["email"], name: "index_users_on_email", unique: true, using: :btree
    t.index ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true, using: :btree
  end

  create_table "video_tutorials", force: :cascade do |t|
    t.string   "code"
    t.string   "title"
    t.string   "video_url"
    t.boolean  "active"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "workshops", force: :cascade do |t|
    t.integer  "user_id"
    t.string   "observation"
    t.string   "institution"
    t.integer  "types_institution_id"
    t.text     "evaluation_link"
    t.integer  "estado_id"
    t.datetime "ministry_at"
    t.datetime "created_at",           null: false
    t.datetime "updated_at",           null: false
    t.decimal  "note"
    t.string   "matter"
    t.text     "hash_evaluation"
    t.datetime "removed_at"
    t.index ["estado_id"], name: "index_workshops_on_estado_id", using: :btree
    t.index ["types_institution_id"], name: "index_workshops_on_types_institution_id", using: :btree
    t.index ["user_id"], name: "index_workshops_on_user_id", using: :btree
  end

  add_foreign_key "evaluation_workshops", "workshops"
  add_foreign_key "workshops", "estados"
  add_foreign_key "workshops", "types_institutions"
  add_foreign_key "workshops", "users"
end
