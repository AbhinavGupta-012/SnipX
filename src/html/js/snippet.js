import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-app.js";
import { getDatabase, ref, push, onValue, remove } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-database.js";

const firebaseConfig = {
    databaseURL: "https://snipx-752dc-default-rtdb.asia-southeast1.firebasedatabase.app/"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
const snippetsRef = ref(db, 'snippets');

document.addEventListener('DOMContentLoaded', () => {
    const snippetForm = document.getElementById('snippetForm');
    const snippetsList = document.getElementById('snippetsList');
    const privacyToggle = document.getElementById('snippetPrivacy');
    const privacyLabel = document.getElementById('privacyLabel');

    function renderSnippets(snippets) {
        snippetsList.innerHTML = '';
        snippets.forEach((snippet) => {
            const snippetElement = document.createElement('div');
            snippetElement.classList.add('snippet-item');
            snippetElement.innerHTML = `
                <h4>${snippet.title}</h4>
                <p><small>${snippet.isPrivate ? 'Private' : 'Public'}</small></p>
                <pre><code>${snippet.code}</code></pre>
                <button class="btn btn-sm btn-outline-danger" data-id="${snippet.id}">Delete</button>
            `;
            snippetsList.appendChild(snippetElement);
        });

        document.querySelectorAll('pre code').forEach((block) => {
            hljs.highlightElement(block);
        });
    }

    function addSnippet(e) {
        e.preventDefault();
        const newSnippet = {
            title: document.getElementById('snippetTitle').value,
            code: document.getElementById('snippetCode').value,
            isPrivate: privacyToggle.checked
        };
        push(snippetsRef, newSnippet);
        snippetForm.reset();
    }

    snippetForm.addEventListener('submit', addSnippet);

    onValue(snippetsRef, (snapshot) => {
        const data = snapshot.val();
        const snippets = data ? Object.entries(data).map(([id, snippet]) => ({id, ...snippet})) : [];
        renderSnippets(snippets);
    });

    snippetsList.addEventListener('click', (e) => {
        if (e.target.classList.contains('btn-outline-danger')) {
            const id = e.target.getAttribute('data-id');
            remove(ref(db, `snippets/${id}`));
        }
    });
    
    function updatePrivacyLabel() {
        privacyLabel.textContent = privacyToggle.checked ? 'Private' : 'Public';
    }

    privacyToggle.addEventListener('change', updatePrivacyLabel);

});