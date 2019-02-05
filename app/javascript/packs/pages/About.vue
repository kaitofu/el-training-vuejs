<template lang="pug">
div
  v-container
    v-layout(justify-center='', align-center='', row)
      v-flex(xs12='' md9='')
        h2 About: このアプリケーションについて
        //- h6 更新日時：2019年2月5日 21:00
    v-layout(justify-center='', align-center='', row)
      v-flex(xs12='' md9='')
        h4 ・これは何か
        p 
          | 
          a(href="https://github.com/everyleaf/el-training/blob/master/docs/el-training.md") カリキュラム
          | に沿って制作したアプリケーションをさらに発展させ、自分なりに改善したものです。
          //- v-layout(justify-center='', align-center='', row)  
          v-btn(to="/login" outline color='#FF9505') Loginページへ行く
        p
          | GitHubリポジトリ： 
          a(href="https://github.com/koalamask/el-training-vuejs") https://github.com/koalamask/el-training-vuejs

        p
          | 元となったアプリケーション： 
          a(href="https://el-training-koalamask.herokuapp.com/") https://el-training-koalamask.herokuapp.com/

    v-layout(justify-center='', align-center='', row)
      v-flex(xs12='' md9='')  
        h4 ・なぜ制作したか
        p 上記のカリキュラムを進める中で、「もっと使いやすいものにできないか？例えば、操作のたびにリダイレクトさせないとか、より少ないクリック数で済ませられるようにしたい」という欲求が生まれました。純粋なRailsアプリケーションであれば、jQueryやJavascriptを用いviewファイルに工夫を施す、Ajaxを用いたリクエストを活用するといったアプローチがあります。
          br 
          | しかし、どう実装すればよいか考え始めたとき、Railsのみで実装するよりも、多少の使用経験があるVue.jsのほうが手順をイメージしやすいことに気が付き、そちらで個人開発をしてみたい気持ちが芽生えました。
          br
          | ただし、Webpackerを用い既存アプリに組み込むという形を取ってはいますが、Ruby on Railsの基礎基本を習得するというカリキュラムの趣旨からは逸脱しているように思えたため、別アプリとして制作することとしました。

    v-layout(justify-center='', align-center='', row)
      v-flex(xs12='' md9='')  
        h4 ・なぜVue.jsを選んだか
        p 上述の通り、業務で使用経験がありどのような実装が必要かイメージが湧きやすかったためです。
          br
          | ただし、業務では既にある程度完成しているプロトタイプを改修するのみで、アプリケーションを新規に立ち上げた経験はありませんでした。それゆえ、各種ツールの使い方やアプリケーションの成り立ちなど、本来必要な体系的な理解からは程遠い状態でもありました。
          br
          | そのため、学習も兼ねて採用を決めました。
    v-layout(justify-center='', align-center='', row)
      v-flex(xs12='' md9='')  
        h4 ・元のバージョンから工夫した点・力を入れた点
        p 1. 使いやすさ向上のため、フロントエンドをSPAとして再構築しました。SPAの長所そのままではありますが、リダイレクトによって画面が真っ白になることは、応答速度も向上しています。
        p 2. 使用感や触りごこちの良さをさらに向上させる目的で、UIにフレームワークVuetifyを用いたマテリアルデザインを採用し、より洗練されたものに刷新しました。
        p 3. また、FrontendとBackendの分離・BackendのAPIサーバ化に伴い、こうした形式のアプリケーションとしての基本的な要件であるAPI認証機能を実装しました。
    v-layout(justify-center='', align-center='', row)
      v-flex(xs12='' md9='')  
        h4 ・用いている技術とそのバージョン
        p Frontend:  Vue.js 2.9.6 / Webpacker 3.5.5 / Vuetify 1.4.4
        p Backend:  Ruby 2.5.3 / Ruby on Rails 5.2.2
    
    v-layout(justify-center='', align-center='', row)
      v-flex(xs12='' md9='')
        h4 ・今後の更新予定
        a(href="https://github.com/everyleaf/el-training/blob/master/docs/el-training.md") el-training-vuejs/issues にも記載
        p
          |  【機能面】
          br
          |  ソート機能の追加
          br
          |  検索機能の追加
          br
          |  ラベルを複数付与できる機能の追加
          br
          |  ユーザ管理機能の追加
          br
          |  その他UIの改善（タスク一覧画面で詳細文が長くなると日付が改行されてしまう、等）
        p 
          |  【コード面】
          br
          |  テストコードの作成（本来後回しにすべきではないのですが、事情がありV1.0公開後としました）
          br
          |  反復表現の抽象化、リファクタリング
</template>

<script>
export default {
  data:{
    return(){
      url: 'https://github.com/koalamask/el-training-vuejs'
    }
  }  
}
</script>

<style lang="scss" scoped>
h4 {
  padding-top: 15px;
}
</style>
