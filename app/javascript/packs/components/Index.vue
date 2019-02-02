<template lang="pug">
div 

  //- 新規作成フォーム FIXME:後々別コンポーネント化する
  v-form()
    v-container
      v-layout(justify-center='', align-center='', row)
        v-flex(xs12='', md10='')
          h3 Create New Task
          v-flex(xs12='')
            v-flex(xs12='')
              v-text-field(v-model='newTask.name', :counter='30', label='タスク名', required='')

            v-layout(justify-center='', align-center='')
              v-flex(xs4='', md4='')
                v-menu(ref='menu', :close-on-content-click='false', v-model='menu', :nudge-right='40', :return-value.sync='date', lazy='', transition='scale-transition', offset-y='', full-width='', min-width='290px')
                  v-text-field(slot='activator', v-model='date', label='期限', prepend-icon='event', readonly='')
                  v-date-picker(v-model='date', no-title='', scrollable='')
                    v-spacer
                    v-btn(flat='', color='primary', @click='menu = false') Cancel
                    v-btn(flat='', color='primary', @click='$refs.menu.save(date)') OK

              v-flex(xs4='', md4='')
                v-select(:items="StatusItems", label="進捗状況", v-model='newTask.status', required='true')
              v-flex(xs4='', md4='')              
                v-select(:items="PriorityItems", label="優先度", v-model='newTask.priority', required='')
        
          v-flex(xs12='')
            v-textarea(v-model='newTask.description', label='詳細', required='')
        
          v-flex(xs12='', md12='')
            v-btn(flat='', color='primary', @click='sendCreateRequestToBackend') 作成
            v-btn(flat='', color='primary', @click='') クリア

          span newTask: {{ $data.newTask }}
          span date: {{ $data.date }}
          

  //- タスク一覧
  v-container
    v-layout(justify-center='', align-center='', row)
      v-flex(xs12='', md10='')
        h3 Folders
        v-list(two-line='', subheader='')
          v-list-tile(v-for='task in tasks', :key='task.id', avatar='', @click='')
            //- v-list-tile-avatar
              //- v-icon(:class='[task.iconClass]') {{ task.icon }}
            v-list-tile-action
              input(type='checkbox')
            v-list-tile-content
              v-list-tile-title {{ task.name }}
              v-list-tile-sub-title {{ task.description }}
            v-list-tile-action
              span {{ task.deadline }}
            v-list-tile-action
              v-btn(icon='', ripple='')
                v-icon(color='task.priority') flag
            v-list-tile-action
              v-btn(icon='', ripple='')
                v-icon(color='grey lighten-1') info
            v-list-tile-action
              v-btn(icon='', ripple='', @click='deleteTask(task.id)')
                v-icon(color='grey lighten-1') delete

          v-divider(inset='')

</template>

<script>
import axios from 'axios'

export default {
  components: {
  },
  data(){
    return {
      // v-datepicker
      date: new Date().toISOString().substr(0, 10),
      menu: false,
      modal: false,
      menu2: false,
      
      // select
      PriorityItems: [1,2,3],
      StatusItems: ['Foo', 'Bar', 'Fizz', 'Buzz'],

      tasks: [],
      newTask: {
        name:'',
        description: '',
        priority:'',
        status:'',
        // deadline:'' Datepickerで直接入力する方法が不明なので、dateプロパティをaxiosでのpost時に直接参照させる（FIXME）
        user_id: 1 
      },
    }
  },
  mounted(){
    this.fetchTasksFromBackend();
  },
  methods: {
    fetchTasksFromBackend(){
      axios.get('/api/tasks').then((response) => {
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
      axios.post('/api/tasks', { task: this.newTask }).then((response) => {
        console.log(response)
        this.clearNewTaskForm()
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
      // this.newTask.deadline = '',
    },
    deleteTask(taskId){
      axios.delete('/api/tasks/' + taskId).then((response) => {
        console.log(response)
        this.fetchTasksFromBackend()
      }, (error) => {
        console.log(error)
      })
    }
  }
}
</script>

<style scoped>
.flex.xs4.md4 {
  padding: 2px;
}

</style>