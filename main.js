'use strict';

{
   const addTaskTrigger = document.getElementById('addBtn');
   const addTaskTarget = document.getElementById('addTaskTarget');
   const tr = document.createElement('tr');
   const idTd = document.createElement('td');
   const commentTd = document.createElement('td');

   //conditionTd_aに idと classを付与
   const conditionTd_a = document.createElement('td');
   conditionTd_a.id = 'working';
   conditionTd_a.className = 'btn';

   //conditionTd_bに idと classを付与
   const conditionTd_b = document.createElement('td');
   conditionTd_b.id = 'remove';
   conditionTd_b.className = 'btn';

   const input = document.getElementById('input');

   let idNum = 0;

   //追加ボタンクリック時の詳細な挙動
   // ※上書きされてしまうことを検証しました。
   const tasks = [];
   const addTask = () => {
      const task = {
         id: idNum,
         comment: input.value,
         condition_a: '作業中',
         condition_b: '削除',
      };

      tasks.push(task);

      displayTasks();

      console.log(tasks); //¥結果確認用
      console.log(tasks[0].id); //¥結果確認用
   };

   //tasks配列の中身を取り出し、表示させる方法がわかりません
   const displayTasks = () => {
      for (let i = 0; i < tasks.length; i++) {
         addTaskTarget.appendChild(tr);
         tr.appendChild(idTd); // 1つめ
         idTd.textContent = tasks[i].id;
         tr.appendChild(commentTd); // 2つ目
         commentTd.textContent = tasks[i].comment; // タスク入力値
         tr.appendChild(conditionTd_a); // 3つ目
         conditionTd_a.textContent = tasks[i].condition_a;
         tr.appendChild(conditionTd_b); // 4つ目
         conditionTd_b.textContent = tasks[i].condition_b;
      }
   };

   //追加ボタンクリック時にaddTask()を走らせる
   addTaskTrigger.addEventListener('click', () => {
      addTask();

      idNum++;
   });
}
