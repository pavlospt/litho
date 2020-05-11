/*
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

package com.facebook.litho.testing.testrunner;

import com.facebook.litho.ComponentsSystrace;
import org.junit.runners.model.InitializationError;
import org.robolectric.DefaultTestLifecycle;
import org.robolectric.RobolectricTestRunner;
import org.robolectric.TestLifecycle;
import org.robolectric.annotation.Config;

public class LithoTestRunner extends RobolectricTestRunner {
  /**
   * Creates a runner to run {@code testClass}. Looks in your working directory for your
   * AndroidManifest.xml file and res directory by default. Use the {@link Config} annotation to
   * configure.
   *
   * @param testClass the test class to be run
   * @throws InitializationError if junit says so
   */
  public LithoTestRunner(final Class<?> testClass) throws InitializationError {
    super(testClass);
  }

  enum ProjectEnvironment {
    INTERNAL,
    OSS;

    static ProjectEnvironment detectFromSystemProperties() {
      final String property = System.getProperty("com.facebook.litho.is_oss");
      // If this isn't set, you're probably not running Buck, ergo this isn't an internal build.
      if (property == null) {
        return OSS;
      }

      return property.equals("true") ? OSS : INTERNAL;
    }
  }

  private static String getResPrefix() {
    // If we're running with gradle, the test runner will start running from within
    // the given sub-project.
    if (System.getProperty("org.gradle.test.worker") != null) {
      return "../litho-it/src/main/";
    }

    String prefix = "";
    switch (ProjectEnvironment.detectFromSystemProperties()) {
      case OSS:
        break;
      case INTERNAL:
        final String internalRoot = System.getProperty("com.facebook.litho.internal_root");
        if (internalRoot != null) {
          prefix = internalRoot + "/";
        }
    }

    return prefix + "litho-it/src/main/";
  }

  @Override
  protected Config buildGlobalConfig() {
    // We are hard-coding the path here instead of relying on BUCK internals
    // to allow for building with gradle in the Open Source version.
    return new Config.Builder().setManifest(getResPrefix() + "AndroidManifest.xml").build();
  }

  @Override
  protected Class<? extends TestLifecycle> getTestLifecycleClass() {
    return LithoTestLifecycle.class;
  }

  public static class LithoTestLifecycle extends DefaultTestLifecycle {
    public LithoTestLifecycle() {
      ComponentsSystrace.provide(NoOpComponentsSystrace.sInstance);
    }
  }
}
