import { defineConfig } from 'windicss/helpers';

export default defineConfig({
  extract: {
    include: ['**/*.{tsx,jsx,js,css,html}'],
    exclude: ['node_modules', '.git', '.next/**/*'],
  },
});
