function login() {
    const email = document.getElementById('login-email').value.trim();
    const password = document.getElementById('login-password').value.trim();
    const result = document.getElementById('login-result');
    if (!email || !password) {
        result.innerHTML = '<span class="error">Hãy nhập đầy đủ thông tin</span>';
        return;
    }
    const user = users.find(u => u.email === email && u.password === password);
    if (user) {
        result.innerHTML = `<span class="text-success">Xin chào ${user.first_name} ${user.last_name}</span>`;
    } else {
        result.innerHTML = '<span class="error">Thông tin tài khoản không chính xác</span>';
    }
}

function register() {
    const first = document.getElementById('reg-first').value.trim();
    const last = document.getElementById('reg-last').value.trim();
    const email = document.getElementById('reg-email').value.trim();
    const password = document.getElementById('reg-password').value.trim();
    const result = document.getElementById('register-result');
    if (!first || !last || !email || !password) {
        result.innerHTML = '<span class="error">Hãy nhập đầy đủ thông tin</span>';
        return;
    }
    if (users.some(u => u.email === email)) {
        result.innerHTML = '<span class="error">Email này đã có tài khoản</span>';
        return;
    }
    const newId = users.length ? Math.max(...users.map(u => u.id)) + 1 : 1;
    users.unshift({ id: newId, first_name: first, last_name: last, email, password });
    result.innerHTML = '<span class="text-success">Đăng ký thành công!</span>';
}

function searchUsers() {
    const keyword = document.getElementById('user-keyword').value.trim().toLowerCase();
    let filtered = users;
    if (keyword) {
        filtered = users.filter(u =>
            (u.first_name + ' ' + u.last_name).toLowerCase().includes(keyword) ||
            u.email.toLowerCase().includes(keyword)
        );
    }
    let html = '<div class="table-responsive"><table class="table table-bordered table-striped"><thead><tr><th>ID</th><th>Họ tên</th><th>Email</th></tr></thead><tbody>';
    filtered.forEach(u => {
        html += `<tr>
            <td>${u.id}</td>
            <td>${u.first_name} ${u.last_name}</td>
            <td>${u.email}</td>
        </tr>`;
    });
    html += '</tbody></table></div>';
    document.getElementById('users-list').innerHTML = html;
}

function showPosts() {
    let html = '<div class="table-responsive"><table class="table table-bordered table-striped"><thead><tr><th>ID</th><th>Tiêu đề</th><th>Ngày tạo</th><th>Người tạo</th></tr></thead><tbody>';
    posts.forEach(p => {
        const user = users.find(u => u.id === p.user_id);
        html += `<tr>
            <td>${p.id}</td>
            <td>${p.title}</td>
            <td>${p.created_at}</td>
            <td>${user ? user.first_name + ' ' + user.last_name : 'Unknown'}</td>
        </tr>`;
    });
    html += '</tbody></table></div>';
    document.getElementById('posts-list').innerHTML = html;
}

function showPostDetail() {
    const id = +document.getElementById('post-id').value.trim();
    const result = document.getElementById('post-detail');
    const post = posts.find(p => p.id === id);
    if (!post) {
        result.innerHTML = '<span class="error">Không tìm thấy post</span>';
        return;
    }
    const user = users.find(u => u.id === post.user_id);
    result.innerHTML = `
        <div class="card">
            <div class="card-body">
                <b>ID:</b> ${post.id}<br>
                <b>Tiêu đề:</b> ${post.title}<br>
                <b>Nội dung:</b> ${post.content}<br>
                <b>Ảnh:</b> <a href="${post.image}" target="_blank">Xem ảnh</a><br>
                <b>Người tạo:</b> ${user ? user.first_name + ' ' + user.last_name : 'Unknown'}<br>
                <b>Ngày tạo:</b> ${post.created_at}<br>
                <b>Ngày sửa:</b> ${post.updated_at}
            </div>
        </div>
    `;
}

function searchPostsByUser() {
    const email = document.getElementById('user-email').value.trim();
    const result = document.getElementById('user-posts');
    const user = users.find(u => u.email === email);
    if (!user) {
        result.innerHTML = '<span class="error">Không tìm thấy user</span>';
        return;
    }
    const userPosts = posts.filter(p => p.user_id === user.id);
    if (!userPosts.length) {
        result.innerHTML = 'User này chưa có post nào.';
        return;
    }
    let html = `<b>Posts của ${user.first_name} ${user.last_name}:</b><ul class="list-group mt-2">`;
    userPosts.forEach(p => {
        html += `<li class="list-group-item">${p.title} (ID: ${p.id})</li>`;
    });
    html += '</ul>';
    result.innerHTML = html;
}