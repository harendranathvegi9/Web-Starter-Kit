import gulp from 'gulp';
import { env, noop } from 'gulp-util';
import sourcemaps from 'gulp-sourcemaps';
import rollup from 'rollup-stream';
import source from 'vinyl-source-stream';
import buffer from 'vinyl-buffer';
import rev from 'gulp-rev';
import { stream } from 'browser-sync';

import { DIST_ROOT } from '../constants';
import { APP_CONFIG } from '../config/rollup';
import { CompileError } from '../utils';

gulp.task('app', () => {
  let cache;
  APP_CONFIG.cache = cache;

  return rollup(APP_CONFIG)
    .on('bundle', bundle => cache = bundle)
    .on('error', CompileError.handle)
    .pipe(source('app.js'))
    .pipe(buffer())
    .pipe(!env.prod ? sourcemaps.init({ loadMaps: true }) : noop())
    .pipe(!env.prod ? sourcemaps.write('./') : noop())
    .pipe(env.prod ? rev() : noop())
    .pipe(gulp.dest(DIST_ROOT))
    .pipe(stream());
});
