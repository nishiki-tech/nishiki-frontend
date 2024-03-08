/**
 * This script is used to copy the .env.example file to .env.development.local
 * if the latter does not exist. It helps contributors who start working on the project
 * by automatically setting up the required environment variables.
 */

import { existsSync, copyFileSync } from 'fs';
import { join } from 'path';

const BASE_ENV = '.env.example';
const TARGET_ENV = '.env.development.local';

const projectRoot = process.cwd();
const baseEnvPath = join(projectRoot, BASE_ENV);
const targetEnvPath = join(projectRoot, TARGET_ENV);

if (process.env.VERCEL) {
  console.log(`Skipping ${TARGET_ENV} setup on Vercel`);
} else {
  if (!existsSync(targetEnvPath)) {
    copyFileSync(baseEnvPath, targetEnvPath);
    console.log(`${BASE_ENV} was copied to ${TARGET_ENV} local`);
  } else {
    console.log(`Skipping ${TARGET_ENV} local setup as it already exists`);
  }
}
