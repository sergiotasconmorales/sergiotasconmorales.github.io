---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: list
title: Publications
permalink: publications
---

- Tascon-Morales S., Hoffman S., Treiber M., Mensing D., Oliver A., Günther M. and Gregori J., “Multiple Sclerosis Lesion Segmentation Using Longitudinal Normalization and Convolutional Recurrent Neural Networks," Machine Learning in Clinical Neuroimaging (MLCN) workshop of the MICCAI Conference, 2020. ([link](https://link.springer.com/chapter/10.1007/978-3-030-66843-3_15))
  > Magnetic resonance imaging (MRI) is the primary clinical tool to examine inflammatory brain lesions in Multiple Sclerosis (MS). Disease progression and inflammatory activities are examined by longitudinal image analysis to support diagnosis and treatment decision. Automated lesion segmentation methods based on deep convolutional neural networks (CNN) have been proposed, but are not yet applied in the clinical setting. Typical CNNs working on cross-sectional single time-point data have several limitations: changes to the image characteristics between single examinations due to scanner and protocol variations have an impact on the segmentation output, while at the same time the additional temporal correlation using pre-examinations is disregarded.

  > In this work, we investigate approaches to overcome these limitations. Within a CNN architectural design, we propose convolutional Long Short-Term Memory (C-LSTM) networks to incorporate the temporal dimension. To reduce scanner- and protocol dependent variations between single MRI exams, we propose a histogram normalization technique as pre-processing step. The ISBI 2015 challenge data was used for network training and cross-validation.

  > We demonstrate that the combination of the longitudinal normalization and CNN architecture increases the performance and the inter-time-point stability of the lesion segmentation. In the combined solution, the dice coefficient was increased and made more consistent for each subject. The proposed methods can therefore be used to increase the performance and stability of fully automated lesion segmentation applications in the clinical routine or in clinical trials.
