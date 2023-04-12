/*
ps2ps.js
by mrfakename
v0.0.1 (beta)
Stability: unstable, beta
Do not use in production!
*/
function convertPodspecToPackage(podspecFileContent) {
  const podspecNameMatch = podspecFileContent.match(/s.name\s+=\s+['"]([^'"]+)['"]/);
  if (!podspecNameMatch) {
    return false;
  }
  const podspecName = podspecNameMatch[1];
  const podspecVersionMatch = podspecFileContent.match(/s.version\s+=\s+['"]([^'"]+)['"]/);
  if (!podspecVersionMatch) {
    return false;
  }
  const podspecVersion = podspecVersionMatch[1];
  const podspecDependencyMatch = podspecFileContent.match(/s.dependency\s+=\s+['"]([^'"]+)['"]/);
  const podspecDependencies = podspecDependencyMatch ? podspecDependencyMatch[1] : null;
  const packageSwiftContent = `
    // swift-tools-version:5.0
    import PackageDescription

    let package = Package(
        name: "${podspecName}",
        products: [
            .library(name: "${podspecName}", targets: ["${podspecName}"]),
        ]${podspecDependencies ? `,
        dependencies: [
            ${podspecDependencies},
        ]` : ''},
        targets: [
            .target(name: "${podspecName}", dependencies: []),
        ]
    )
  `;

  return packageSwiftContent;
}
