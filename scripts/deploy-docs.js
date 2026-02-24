const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const runCommand = (command, description) => {
    console.log(`\n${description}...`);
    try {
        execSync(command, { stdio: 'inherit' });
        console.log(`${description} completed`);
    } catch (error) {
        console.error(`Failed: ${description}`);
        process.exit(1);
    }
};

const copyDir = (src, dest) => {
    if (!fs.existsSync(src)) {
        console.error(`Source directory not found: ${src}`);
        process.exit(1);
    }
    if (!fs.existsSync(dest)) {
        fs.mkdirSync(dest, { recursive: true });
    }
    fs.cpSync(src, dest, { recursive: true });
    console.log(`Copied ${src} -> ${dest}`);
};

console.log('Building documentation into build/docs...\n');

runCommand('npm run build-storybook', 'Building Storybook');
runCommand('npm run docs', 'Generating JSDoc');

const buildDocsDir = path.join(__dirname, '..', 'build', 'docs');

if (fs.existsSync(buildDocsDir)) {
    fs.rmSync(buildDocsDir, { recursive: true, force: true });
}
fs.mkdirSync(buildDocsDir, { recursive: true });

const storybookSrc = path.join(__dirname, '..', 'storybook-static');
copyDir(storybookSrc, path.join(buildDocsDir, 'storybook'));

const docsSrc = path.join(__dirname, '..', 'docs');
copyDir(docsSrc, path.join(buildDocsDir, 'api'));

const indexHtml = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Trivia Quiz - Documentation</title>
    <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
            background-color: #f0f2f5;
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 20px;
        }
        .container {
            display: flex;
            flex-direction: column;
            align-items: center;
            text-align: center;
            max-width: 600px;
            width: 100%;
        }
        h1 {
            font-size: 48px;
            margin-bottom: 16px;
            color: #333;
        }
        p {
            font-size: 20px;
            margin-bottom: 32px;
            color: #6c757d;
        }
        .links {
            display: flex;
            flex-direction: column;
            gap: 16px;
            width: 100%;
        }
        a {
            display: block;
            padding: 20px 32px;
            background-color: white;
            color: #333;
            text-decoration: none;
            border-radius: 12px;
            font-weight: 500;
            font-size: 18px;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
            transition: transform 0.2s, box-shadow 0.2s;
        }
        a:hover {
            transform: translateY(-2px);
            box-shadow: 0 6px 16px rgba(0, 0, 0, 0.15);
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>Documentation</h1>
        <p>Choose the documentation you want to explore:</p>
        <div class="links">
            <a href="./storybook/index.html">Storybook - Component Library</a>
            <a href="./api/index.html">JSDoc - API Documentation</a>
        </div>
    </div>
</body>
</html>`;

fs.writeFileSync(path.join(buildDocsDir, 'index.html'), indexHtml);
console.log('Created documentation landing page');

console.log('\nDocumentation built into build/docs successfully!');
console.log('Run "npm run deploy" to publish everything together.');
