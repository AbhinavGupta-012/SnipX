document.addEventListener('DOMContentLoaded', () => {
    const snippetContainer = document.getElementById('snippetContainer');
    const snippetModal = new bootstrap.Modal(document.getElementById('snippetModal'));
    const snippetCode = document.getElementById('snippetCode');
    const searchInput = document.getElementById('search-input');

    const snippets = [
        {
            title: "JavaScript Utility Functions",
            description: "A collection of useful JavaScript utility functions.",
            code: `function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}`
        },
        {
            title: "CSS Flexbox Layout",
            description: "Responsive flexbox layout for modern web design.",
            code: `.container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
}

.item {
    flex: 0 1 calc(33.333% - 20px);
    margin-bottom: 20px;
}

@media (max-width: 768px) {
    .item {
        flex: 0 1 calc(50% - 10px);
    }
}

@media (max-width: 480px) {
    .item {
        flex: 0 1 100%;
    }
}`
        },
        {
            title: "Python Data Processing",
            description: "Efficient data processing scripts in Python.",
            code: `import pandas as pd
import numpy as np

def process_data(file_path):
    df = pd.read_csv(file_path)
    df['new_column'] = df['column_a'] + df['column_b']
    df['normalized'] = (df['value'] - df['value'].min()) / (df['value'].max() - df['value'].min())
    result = df.groupby('category').agg({
        'new_column': 'sum',
        'normalized': 'mean'
    })
    return result

if __name__ == "__main__":
    result = process_data('data.csv')
    print(result)`
        },
        {
            title: "Custom Button CSS",
            description: "Stylish and customizable button design.",
            code: `.custom-button {
    padding: 10px 20px;
    background-color: #a1ff14;
    color: #121212;
    border: none;
    border-radius: 5px;
    font-weight: bold;
    text-transform: uppercase;
    transition: all 0.3s ease;
}

.custom-button:hover {
    background-color: #8fcf13;
    box-shadow: 0 0 10px rgba(161, 255, 20, 0.5);
    transform: translateY(-2px);
}`
        },
        {
            title: "Custom Scrollbar CSS",
            description: "Sleek custom scrollbar design.",
            code: `::-webkit-scrollbar {
    width: 10px;
}

::-webkit-scrollbar-track {
    background: #f1f1f1;
}

::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 5px;
}

::-webkit-scrollbar-thumb:hover {
    background: #555;
}`
        },
        {
            title: "React Functional Component",
            description: "Basic structure of a React functional component.",
            code: `import React from 'react';

const MyComponent = ({ prop1, prop2 }) => {
    const [state, setState] = React.useState(initialState);

    React.useEffect(() => {
        // Side effect code here
        return () => {
            // Cleanup code here
        };
    }, []);

    const handleClick = () => {
        // Event handler code
    };

    return (
        <div>
            <h1>{prop1}</h1>
            <p>{prop2}</p>
            <button onClick={handleClick}>Click me</button>
        </div>
    );
};

export default MyComponent;`
        },
        {
            title: "SQL Query Example",
            description: "Common SQL query patterns.",
            code: `-- Select all columns from a table
SELECT * FROM users;

-- Select specific columns with a WHERE clause
SELECT first_name, last_name, email
FROM users
WHERE age >= 18;

-- Join two tables
SELECT orders.order_id, users.username, orders.total_amount
FROM orders
INNER JOIN users ON orders.user_id = users.id
WHERE orders.order_date >= '2023-01-01';

-- Group by and aggregate functions
SELECT category, COUNT(*) as total_products, AVG(price) as avg_price
FROM products
GROUP BY category
HAVING COUNT(*) > 5
ORDER BY total_products DESC;`
        },
        {
            title: "Express.js Server Setup",
            description: "Basic Express.js server configuration.",
            code: `const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello, World!');
});

app.post('/api/data', (req, res) => {
    const { name, email } = req.body;
    // Process the data
    res.json({ message: 'Data received successfully' });
});

app.listen(port, () => {
    console.log(\`Server running on port \${port}\`);
});`
        },
        {
            title: "CSS Grid Layout",
            description: "Responsive grid layout using CSS Grid.",
            code: `.grid-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 20px;
}

.grid-item {
    background-color: #f0f0f0;
    padding: 20px;
    border-radius: 5px;
}

@media (max-width: 768px) {
    .grid-container {
        grid-template-columns: 1fr;
    }
}`
        }
    ];

    function createSnippetCard(snippet, index) {
        const card = document.createElement('div');
        card.className = 'col-md-4 mb-4';
        card.innerHTML = `
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">${snippet.title}</h5>
                    <p class="card-text text-white">${snippet.description}</p>
                    <button class="view-snippet" data-index="${index}">View Snippet</button>
                </div>
            </div>
        `;
        return card;
    }

    function renderSnippets(snippetsToRender) {
        snippetContainer.innerHTML = '';
        snippetsToRender.forEach((snippet, index) => {
            snippetContainer.appendChild(createSnippetCard(snippet, index));
        });
    }

    renderSnippets(snippets);

    snippetContainer.addEventListener('click', (e) => {
        if (e.target.classList.contains('view-snippet')) {
            const index = e.target.getAttribute('data-index');
            const snippet = snippets[index];
            document.getElementById('snippetModalLabel').textContent = snippet.title;
            snippetCode.textContent = snippet.code;
            hljs.highlightElement(snippetCode);
            snippetModal.show();
        }
    });

    searchInput.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase();
        const filteredSnippets = snippets.filter(snippet => 
            snippet.title.toLowerCase().includes(searchTerm) || 
            snippet.description.toLowerCase().includes(searchTerm)
        );
        renderSnippets(filteredSnippets);
    });
});