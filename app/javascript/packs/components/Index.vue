<template lang="pug">
div 
  //- 新規作成フォーム FIXME:後々別コンポーネント化する
  v-alert(
      v-model="alert"
      dismissible
      type="success") ログインしました.
  v-form()
    v-container
      v-layout(justify-center='', align-center='', row)
        v-flex(xs12='', md10='')
          h3 タスク新規作成
          v-flex(xs12='')
            v-flex(xs12='')
              v-text-field(v-model='newTask.name', :counter='30', label='タスク名', required='')
            v-layout(justify-center='', align-center='')
              v-flex(xs12='', sm6='', md4='')
                v-menu(ref='menu', :close-on-content-click='false', v-model='menu', :nudge-right='40', :return-value.sync='newTask.deadline', lazy='', transition='scale-transition', offset-y='', full-width='', min-width='290px')
                  v-text-field(slot='activator', v-model='newTask.deadline', label='Picker in menu', prepend-icon='event', readonly='')
                  v-date-picker(v-model='newTask.deadline', no-title='', scrollable='')
                    v-spacer
                    v-btn(flat='', color='primary', @click='menu = false') Cancel
                    v-btn(flat='', color='primary', @click='$refs.menu.save(newTask.deadline)') OK
              v-spacer
              v-flex(xs4='', md4='')
                v-select(:items="StatusItems", label="進捗状況", v-model='newTask.status', required='true')
              v-flex(xs4='', md4='')              
                v-select(:items="PriorityItems", label="優先度", v-model='newTask.priority', required='')
          v-flex(xs12='')
            v-textarea(v-model='newTask.description', label='詳細', required='')
          v-flex(xs12='', md12='')
            v-btn(flat='', color='primary', @click='sendCreateRequestToBackend') 作成
            v-btn(flat='', color='primary', @click='clearNewTaskForm') クリア

          //- デバッグ用
          p newTask
          p {{ newTask }}

          p editing
          p {{ editingTask }}

  //- タスク一覧
  v-container
    v-layout(justify-center='', align-center='', row)
      v-flex(xs12='', md10='')
        h3 タスク一覧
        v-list(two-line='', subheader='')
          v-list-tile(v-for='task in tasks', :key='task.id', avatar='')
            //- v-list-tile-avatar
              //- v-icon(:class='[task.iconClass]') {{ task.icon }}
            v-list-tile-action
              v-icon(v-if='task.status === "未着手"' color='grey' @click='toggleStatus(task.id, "着手中")') mdi-checkbox-blank-circle-outline
              v-icon(v-else-if='task.status === "着手中"' color='grey' @click='toggleStatus(task.id, "完了")') mdi-progress-check
              v-icon(v-else-if='task.status === "完了"' color='grey' @click='toggleStatus(task.id, "未着手")') mdi-check-circle
            v-list-tile-content(@click='dialog = true, setEditingTask(task.id)')
              v-list-tile-title {{ task.name }}
              v-list-tile-sub-title {{ task.description }}
            v-list-tile-action
              span {{ task.deadline }}
            v-list-tile-action
              v-menu(open-on-click top offset-y)
                v-btn(slot="activator" icon='', ripple='')
                  v-icon(v-if='task.priority === 2' color='red') flag
                  v-icon(v-else-if='task.priority === 1' color='yellow') flag
                  v-icon(v-else-if='task.priority === 0' color='green') flag

                v-list
                  v-list-tile(v-for='(item, index) in PriorityItems', :key='index')
                    v-list-tile-title(@click='updatePriority(task.id, item.text)') {{ item.text }}
                    
            v-list-tile-action
              v-btn(icon='', ripple='')
                v-icon(color='grey lighten-1', @click='dialog = true, setEditingTask(task.id)') info
            v-list-tile-action
              v-btn(icon='', ripple='')
                v-icon(color='grey lighten-1', @click='confirmDialog = true, setEditingTask(task.id)') delete

          v-divider(inset='')
  
  //- タスク編集フォーム 
  v-layout(row='', justify-center='')
    v-dialog(v-model='dialog', persistent=false, max-width='600px')
      v-card
        v-card-title
          span.headline タスクの編集
        v-card-text
          v-layout(justify-center='', align-center='', row)
            v-flex(xs12='', md10='')
              v-flex(xs12='')
                v-flex(xs12='')
                  v-text-field(v-model='editingTask.name', :counter='30', label='タスク名', required='')
                v-layout(justify-center='', align-center='')
                  v-flex(xs4='', md4='')
                    v-menu(ref='menu2', :close-on-content-click='false', v-model='menu2', :nudge-right='40', :return-value.sync='editingTask.deadline', lazy='', transition='scale-transition', offset-y='', full-width='', min-width='290px')
                      v-text-field(slot='activator', v-model='editingTask.deadline', label='期限', prepend-icon='event', readonly='')
                      v-date-picker(v-model='editingTask.deadline', no-title='', scrollable='')
                        v-spacer
                        v-btn(flat='', color='primary', @click='menu2 = false') キャンセル
                        v-btn(flat='', color='primary', @click='$refs.menu2.save(editingTask.deadline)') 決定
                  v-flex(xs4='', md4='')
                    v-select(:items="StatusItems", label="進捗状況", v-model='editingTask.status', required='true')
                  v-flex(xs4='', md4='')              
                    v-select(:items="PriorityItems", label="優先度", v-model='editingTask.priority', required='')
              v-flex(xs12='')
                v-textarea(v-model='editingTask.description', label='詳細', required='')
        v-card-actions
          v-spacer
          v-btn(color='blue darken-1', flat='', @click='dialog = false') キャンセル
          v-btn(color='blue darken-1', flat='', @click='dialog = false, sendPatchRequestToBackend(editingTask.id)') 保存

    v-dialog(v-model='confirmDialog', max-width='500px')
      v-card
        v-card-title
          span タスク"{{ editingTask.name }}"を削除します。よろしいですか？
          v-spacer
        v-card-actions
          v-btn(color='primary', flat='', @click='confirmDialog = false') キャンセル
          v-btn(color='primary', flat='', @click='confirmDialog = false, deleteTask(editingTask.id)') 削除


</template>

<script>
import axios from 'axios'

export default {
  components: {
  },
  data(){
    return {
      tasks: [],
      newTask: {
        name:'',
        description: '',
        priority:'',
        status:'',
        deadline: new Date().toISOString().substr(0, 10),
        user_id: this.$store.getters.current_user_id
      },
      // v-datepicker
      newDate: new Date().toISOString().substr(0, 10),
      menu: false,
      modal: false,
      editDate: new Date().toISOString().substr(0, 10),
      menu2: false,
      
      // v-select
      PriorityItems: [
        { text: '高', value: 2 },
        { text: '中', value: 1 },
        { text: '低', value: 0 }
      ],
      StatusItems: ['未着手', '着手中', '完了'],

      // modal
      dialog: false,
      editingTask: {
        id: '',
        name:'',
        description: '',
        priority:'',
        status:'',
        deadline: new Date().toISOString().substr(0, 10),
        user_id: this.$store.getters.current_user_id
      },

      // v-alert
      alert: true,
      
      // delete confirm
      confirmDialog: false
    }
  },
  mounted(){
    this.fetchTasksFromBackend();
  },
  computed: {
    flagColor(){
        return 'blue darken-1'
    }
  },
  methods: {
    fetchTasksFromBackend(){
      axios({
        method: 'get',
        url: '/api/tasks',
        headers: { 
          'Authorization': 'Token ' + this.$store.getters.auth_token,
          'Content-Type':'application/json' }
        })
        .then((response) => {
          console.log(response)
          this.tasks = []
          for(var i = 0; i < response.data.tasks.length; i++) {
            this.tasks.push(response.data.tasks[i]);
        }
      }, (error) => {
        console.log(error)
      })
    },
    sendCreateRequestToBackend(){
      axios({
        method: 'post',
        url: '/api/tasks',
        headers: { 
          'Authorization': 'Token ' + this.$store.getters.auth_token,
          'Content-Type':'application/json' },
        data: { task: this.newTask }
      })
      .then((response) => {
        console.log(response)
        this.fetchTasksFromBackend()
      }, (error) => {
        console.log(error)
      })
    },
    clearNewTaskForm(){
      this.newTask.name = '',
      this.newTask.description = '',
      this.newTask.priority = '',
      this.newTask.status = ''
      this.newTask.deadline = new Date().toISOString().substr(0, 10)
    },
    deleteTask(taskId){
      axios({
        method: 'delete',
        url: '/api/tasks/' + taskId,
        headers: { 
          'Authorization': 'Token ' + this.$store.getters.auth_token, 
          'Content-Type':'application/json' },
      })
      .then((response) => {
        console.log(response)
        this.fetchTasksFromBackend()
      }, (error) => {
        console.log(error)
      })
    },
    setEditingTask(taskId){
      let clickedTask              = this.tasks.find( presentTasksInArray =>  presentTasksInArray.id === taskId )
      this.editingTask.id          = clickedTask.id,      
      this.editingTask.name        = clickedTask.name,
      this.editingTask.description = clickedTask.description,
      this.editingTask.priority    = clickedTask.priority,
      this.editingTask.status      = clickedTask.status
    },
    sendPatchRequestToBackend(taskId){
      axios({
        method: 'put',
        url: '/api/tasks/' + taskId,
        headers: {
          'Authorization': 'Token ' + this.$store.getters.auth_token,
          'Content-Type':'application/json' },
        data: { task: this.editingTask }
      })
      .then((response) => {
        console.log(response)
        this.fetchTasksFromBackend()
      }, (error) => {
        console.log(error)
      })
    },
    toggleStatus(taskId, nextStatus){
      axios({
        method: 'put',
        url: '/api/tasks/' + taskId,
        headers: {
          'Authorization': 'Token ' + this.$store.getters.auth_token,
          'Content-Type':'application/json' },
        data: { task: { status: nextStatus } }
      })
      .then((response) => {
        console.log(response)
        this.fetchTasksFromBackend()
      }, (error) => {
        console.log(error)
      })
    },
    updatePriority(taskId, newPriority){
      console.log(newPriority)
      axios({
        method: 'put',
        url: '/api/tasks/' + taskId,
        headers: {
          'Authorization': 'Token ' + this.$store.getters.auth_token,
          'Content-Type':'application/json' },
        data: { task: { priority: newPriority } }
      })
      .then((response) => {
        console.log(response)
        this.fetchTasksFromBackend()
      }, (error) => {
        console.log(error)
      })
    },
  }
}
</script>

<style scoped>
.flex.xs4.md4 {
  padding: 2px;
}
</style>