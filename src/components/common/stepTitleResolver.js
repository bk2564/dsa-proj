export function resolveStepCardContent(step, actionTitles) {
  const normalizedText = step?.text?.trim?.() || "";
  const mappedTitle = actionTitles?.[step?.action];

  if (mappedTitle) {
    return {
      title: mappedTitle,
      description: normalizedText,
    };
  }

  return {
    title: normalizedText,
    description: "",
  };
}
