// Lấy tasks từ localStorage hoặc khởi tạo mảng rỗng
let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
let currentTab = 'all';

function saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function renderTasks() {
    const list = document.getElementById('task-list');
    list.innerHTML = '';
    let filtered = [];
    if (currentTab === 'all') filtered = tasks;
    else if (currentTab === 'active') filtered = tasks.filter(t => !t.completed);
    else if (currentTab === 'completed') filtered = tasks.filter(t => t.completed);

    filtered.forEach(task => {
        const div = document.createElement('div');
        div.className = 'task' + (task.completed ? ' completed' : '');
        div.innerHTML = `
            <input type="checkbox" ${task.completed ? 'checked' : ''} data-id="${task.id}">
            <span>${task.text}</span>
            ${currentTab === 'completed' ? `<span class="delete-btn" data-id="${task.id}">&#128465;</span>` : ''}
        `;
        list.appendChild(div);
    });

    // Hiện nút xóa tất cả ở tab completed nếu có task
    document.getElementById('delete-all-btn').style.display =
        (currentTab === 'completed' && filtered.length) ? 'inline-block' : 'none';
}

// Thêm task
document.getElementById('add-btn').onclick = function() {
    const input = document.getElementById('task-input');
    const text = input.value.trim();
    if (!text) return;
    tasks.push({ id: Date.now(), text, completed: false });
    input.value = '';
    saveTasks();
    renderTasks();
};

// Đánh dấu hoàn thành
document.getElementById('task-list').onclick = function(e) {
    if (e.target.type === 'checkbox') {
        const id = +e.target.dataset.id;
        tasks = tasks.map(t => t.id === id ? { ...t, completed: !t.completed } : t);
        saveTasks();
        renderTasks();
    }
    // Xóa task
    if (e.target.classList.contains('delete-btn')) {
        const id = +e.target.dataset.id;
        tasks = tasks.filter(t => t.id !== id);
        saveTasks();
        renderTasks();
    }
};

// Chuyển tab
document.querySelectorAll('.tab').forEach(tab => {
    tab.onclick = function() {
        document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
        this.classList.add('active');
        currentTab = this.dataset.tab;
        renderTasks();
    };
});

// Xóa tất cả task completed
document.getElementById('delete-all-btn').onclick = function() {
    tasks = tasks.filter(t => !t.completed);
    saveTasks();
    renderTasks();
};

// Render lần đầu
renderTasks();