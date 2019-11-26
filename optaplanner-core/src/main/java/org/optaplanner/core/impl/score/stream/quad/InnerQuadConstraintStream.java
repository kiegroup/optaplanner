/*
 * Copyright 2019 Red Hat, Inc. and/or its affiliates.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
package org.optaplanner.core.impl.score.stream.quad;

import java.math.BigDecimal;

import org.optaplanner.core.api.function.QuadFunction;
import org.optaplanner.core.api.function.ToIntQuadFunction;
import org.optaplanner.core.api.function.ToLongQuadFunction;
import org.optaplanner.core.api.score.Score;
import org.optaplanner.core.api.score.stream.Constraint;
import org.optaplanner.core.api.score.stream.quad.QuadConstraintStream;

public interface InnerQuadConstraintStream<A, B, C, D> extends QuadConstraintStream<A, B, C, D> {

    @Override
    default Constraint penalize(String constraintPackage, String constraintName, Score<?> constraintWeight,
            ToIntQuadFunction<A, B, C, D> matchWeigher) {
        return impactScore(constraintPackage, constraintName, constraintWeight, matchWeigher, false);
    }

    @Override
    default Constraint penalizeLong(String constraintPackage, String constraintName, Score<?> constraintWeight,
            ToLongQuadFunction<A, B, C, D> matchWeigher) {
        return impactScoreLong(constraintPackage, constraintName, constraintWeight, matchWeigher, false);
    }

    @Override
    default Constraint penalizeBigDecimal(String constraintPackage, String constraintName, Score<?> constraintWeight,
            QuadFunction<A, B, C, D, BigDecimal> matchWeigher) {
        return impactScoreBigDecimal(constraintPackage, constraintName, constraintWeight, matchWeigher, false);
    }

    @Override
    default Constraint penalizeConfigurable(String constraintPackage, String constraintName,
            ToIntQuadFunction<A, B, C, D> matchWeigher) {
        return impactScoreConfigurable(constraintPackage, constraintName, matchWeigher, false);
    }

    @Override
    default Constraint penalizeConfigurableLong(String constraintPackage, String constraintName,
            ToLongQuadFunction<A, B, C, D> matchWeigher) {
        return impactScoreConfigurableLong(constraintPackage, constraintName, matchWeigher, false);
    }

    @Override
    default Constraint penalizeConfigurableBigDecimal(String constraintPackage, String constraintName,
            QuadFunction<A, B, C, D, BigDecimal> matchWeigher) {
        return impactScoreConfigurableBigDecimal(constraintPackage, constraintName, matchWeigher, false);
    }

    @Override
    default Constraint reward(String constraintPackage, String constraintName, Score<?> constraintWeight,
            ToIntQuadFunction<A, B, C, D> matchWeigher) {
        return impactScore(constraintPackage, constraintName, constraintWeight, matchWeigher, true);
    }

    @Override
    default Constraint rewardLong(String constraintPackage, String constraintName, Score<?> constraintWeight,
            ToLongQuadFunction<A, B, C, D> matchWeigher) {
        return impactScoreLong(constraintPackage, constraintName, constraintWeight, matchWeigher, true);
    }

    @Override
    default Constraint rewardBigDecimal(String constraintPackage, String constraintName, Score<?> constraintWeight,
            QuadFunction<A, B, C, D, BigDecimal> matchWeigher) {
        return impactScoreBigDecimal(constraintPackage, constraintName, constraintWeight, matchWeigher, true);
    }

    @Override
    default Constraint rewardConfigurable(String constraintPackage, String constraintName,
            ToIntQuadFunction<A, B, C, D> matchWeigher) {
        return impactScoreConfigurable(constraintPackage, constraintName, matchWeigher, true);
    }

    @Override
    default Constraint rewardConfigurableLong(String constraintPackage, String constraintName,
            ToLongQuadFunction<A, B, C, D> matchWeigher) {
        return impactScoreConfigurableLong(constraintPackage, constraintName, matchWeigher, true);
    }

    @Override
    default Constraint rewardConfigurableBigDecimal(String constraintPackage, String constraintName,
            QuadFunction<A, B, C, D, BigDecimal> matchWeigher) {
        return impactScoreConfigurableBigDecimal(constraintPackage, constraintName, matchWeigher, true);
    }

    Constraint impactScore(String constraintPackage, String constraintName, Score<?> constraintWeight,
            ToIntQuadFunction<A, B, C, D> matchWeigher, boolean positive);

    Constraint impactScoreLong(String constraintPackage, String constraintName, Score<?> constraintWeight,
            ToLongQuadFunction<A, B, C, D> matchWeigher, boolean positive);

    Constraint impactScoreBigDecimal(String constraintPackage, String constraintName, Score<?> constraintWeight,
            QuadFunction<A, B, C, D, BigDecimal> matchWeigher, boolean positive);

    Constraint impactScoreConfigurable(String constraintPackage, String constraintName,
            ToIntQuadFunction<A, B, C, D> matchWeigher, boolean positive);

    Constraint impactScoreConfigurableLong(String constraintPackage, String constraintName,
            ToLongQuadFunction<A, B, C, D> matchWeigher, boolean positive);

    Constraint impactScoreConfigurableBigDecimal(String constraintPackage, String constraintName,
            QuadFunction<A, B, C, D, BigDecimal> matchWeigher, boolean positive);

}
