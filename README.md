# El-Training-with-VueJS

[![Ruby version](https://img.shields.io/badge/Ruby-2.5.3-red.svg)]()
[![RoR version](https://img.shields.io/badge/Ruby%20on%20Rails-5.2.2-red.svg)]()
[![VueJs version](https://img.shields.io/badge/Vue.js-2.9.6-brightgreen.svg)]()
[![License MIT](https://img.shields.io/badge/License-MIT-lightgrey.svg)]()

このアプリケーションは、RubyおよびRuby On Railsを用いたWebアプリケーション作成の学習過程において制作されたEl-Trainingを拡張し、カリキュラムの範疇を超えて改善を試みたものです。

This application extended El-Training which was created in the learning process of Web application creation using Ruby and Ruby On Rails, tried to improve beyond the curriculum category.


(Screenshot)


### Published at:
https://el-training-koalamask.herokuapp.com/

#### The following users can be used:

User as an admininstrator: 

email: test_user_a@example.com
password: password

Common user: 

email: test_user_b@example.com
password: password

### Curriculum
[株式会社万葉の新入社員教育用カリキュラム https://everyleaf.com/](https://github.com/everyleaf/el-training)

### Reference
[現場で使える Ruby on Rails 5速習実践ガイド](https://www.amazon.co.jp/%E7%8F%BE%E5%A0%B4%E3%81%A7%E4%BD%BF%E3%81%88%E3%82%8B-Ruby-Rails-5%E9%80%9F%E7%BF%92%E5%AE%9F%E8%B7%B5%E3%82%AC%E3%82%A4%E3%83%89-%E5%A4%A7%E5%A0%B4%E5%AF%A7%E5%AD%90/dp/4839962227)

## Requirement
Ruby 2.5.3
Bundler 1.17.3
PostgreSQL 10.4


## Installation

1. Clone this repository
```
$ git clone git@github.com:koalamask/el-training-vuejs.git
```

2. Move into your project
```
$ cd el-training-vuejs
```

3. Install Ruby 2.5.3 (If nessesary) 
```
$ rbenv install 2.5.3（必要に応じて）
```

3. Set Ruby version to 2.53(If nessesary)
```
$ rbenv local 2.5.3（必要に応じて）
```

4. Install Bundler 1.17.3(If nessesary)
```
$ gem install bundler -v 1.17.3（必要に応じて）
```

5. Install gems
```
$ bundle install
```

6. Install libraries
```
$ yarn install
```

7. Install PostgreSQL(If nessesary)
```
$ brew install postgresql
```

8. Start PostgreSQL(If nessesary)
```
$ brew services start postgresql
```

9. Create database
```
$ bin/rails db:create
```

10. Exec migration
```
$ bin/rails db:migrate RAILS_ENV=development
```

11. Create sample data(If nessesary)
```
$ rake db:seed
```

12. Build & run server
```
$ bin/server
```
Then, you can see app in `http://localhost:5000`


## License

This project is licensed under the MIT License - see the [LICENSE.md]() file for details