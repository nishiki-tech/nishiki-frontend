import { existsSync, copyFileSync } from 'fs';
import { join } from 'path';

const projectRoot = process.cwd();
const envLocalPath = join(projectRoot, '.env.local');
const envExamplePath = join(projectRoot, '.env.example');

if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
  if (!existsSync(envLocalPath)) {
    copyFileSync(envExamplePath, envLocalPath);
    console.log('.env.example was copied to .env.local');
  } else {
    console.log('.env.local already exists');
  }
} else {
  console.log('Skipping .env.local setup for non-development environment.');
}
