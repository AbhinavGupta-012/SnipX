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
    let editingSnippetId = null; // Track snippet being edited

    function renderSnippets(snippets) {
        snippetsList.innerHTML = '';
        snippets.forEach((snippet) => {
            const snippetElement = document.createElement('div');
            snippetElement.classList.add('snippet-item');
            snippetElement.innerHTML = `
                <h4>${snippet.title}</h4>
                <p><small>${snippet.isPrivate ? 'Private' : 'Public'}</small></p>
                <pre><code>${snippet.code}</code></pre>
                <button class="btn btn-sm btn-outline-info view-btn" data-id="${snippet.id}">View Code</button>
                <button class="btn btn-sm btn-outline-success share-btn" data-id="${snippet.id}">Share</button>
                <button class="btn btn-sm btn-outline-primary edit-btn" data-id="${snippet.id}">Edit</button>
                <button class="btn btn-sm btn-outline-danger delete-btn" data-id="${snippet.id}">Delete</button>
            `;
            snippetsList.appendChild(snippetElement);
        });

        // Syntax highlighting
        document.querySelectorAll('pre code').forEach((block) => {
            hljs.highlightElement(block);
        });
    }

    function addOrUpdateSnippet(e) {
        e.preventDefault();
        const newSnippet = {
            title: document.getElementById('snippetTitle').value,
            code: document.getElementById('snippetCode').value,
            isPrivate: privacyToggle.checked
        };
        if (editingSnippetId) {
            // Update existing snippet
            const snippetRef = ref(db, `snippets/${editingSnippetId}`);
            update(snippetRef, newSnippet);
            editingSnippetId = null;
        } else {
            // Add new snippet
            push(snippetsRef, newSnippet);
        }
        snippetForm.reset();
    }

    snippetForm.addEventListener('submit', addOrUpdateSnippet);

    onValue(snippetsRef, (snapshot) => {
        const data = snapshot.val();
        const snippets = data ? Object.entries(data).map(([id, snippet]) => ({id, ...snippet})) : [];
        renderSnippets(snippets);
    });

    snippetsList.addEventListener('click', (e) => {
        const id = e.target.getAttribute('data-id');

        if (e.target.classList.contains('delete-btn')) {
            remove(ref(db, `snippets/${id}`));
        }

        if (e.target.classList.contains('edit-btn')) {
            const snippet = snippets.find(snip => snip.id === id);
            document.getElementById('snippetTitle').value = snippet.title;
            document.getElementById('snippetCode').value = snippet.code;
            privacyToggle.checked = snippet.isPrivate;
            editingSnippetId = id; // Set the editing snippet ID
        }

        if (e.target.classList.contains('view-btn')) {
            const snippet = snippets.find(snip => snip.id === id);
            alert(`Code for ${snippet.title}:\n\n${snippet.code}`);
        }

        if (e.target.classList.contains('share-btn')) {
            const shareUrl = `https://snipx-app.com/snippet/${id}`;
            navigator.clipboard.writeText(shareUrl).then(() => {
                alert('Snippet link copied to clipboard!');
            });
        }
    });

    function updatePrivacyLabel() {
        privacyLabel.textContent = privacyToggle.checked ? 'Private' : 'Public';
    }

    privacyToggle.addEventListener('change', updatePrivacyLabel);
});
